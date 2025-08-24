const pool = require('../config/db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
  try {
    const { nom, prenom, email, mdp, dateNaissance } = req.body;

    // Vérifie que les champs sont bien là
    if (!nom || !prenom || !email || !mdp || !dateNaissance) {
      return res.status(400).json({ message: "Champs manquants" });
    }

    const hashed = await bcrypt.hash(mdp, 10);

    const [result] = await pool.execute(
      'INSERT INTO Utilisateurs (Nom, Prenom, Email, Mdp, Date_de_naissance) VALUES (?, ?, ?, ?, ?)',
      [nom, prenom, email, hashed, dateNaissance]
    );

    res.status(201).json({ id: result.insertId });

  } catch (err) {
  console.error('Erreur dans register :', JSON.stringify(err, null, 2));
  res.status(500).json({ error: err.message || 'Erreur serveur' });
}
};


exports.login = async (req, res) => {
  try {
    const { email, mdp } = req.body;
    const [rows] = await pool.execute(
      'SELECT id_Utilisateur, Mdp FROM Utilisateurs WHERE Email = ?',
      [email]
    );
    const user = rows[0];
    if (!user) return res.status(401).json({ message: 'Utilisateur non trouvé' });

    const match = await bcrypt.compare(mdp, user.Mdp);
    if (!match) return res.status(401).json({ message: 'Mot de passe incorrect' });

    const token = jwt.sign(
      { sub: user.id_Utilisateur },
      process.env.JWT_SECRET,
      { expiresIn: '2h' }
    );
    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};