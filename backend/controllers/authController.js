const pool = require('../config/db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
  const { nom, email, mot_de_passe } = req.body;
  try {
    const [rows] = await pool.query('SELECT * FROM Utilisateurs WHERE email = ?', [email]);
    if (rows.length > 0) {
      return res.status(400).json({ message: 'Email déjà utilisé' });
    }
    const hash = await bcrypt.hash(mot_de_passe, 10);
    await pool.query('INSERT INTO Utilisateurs (nom, email, mot_de_passe) VALUES (?, ?, ?)', [nom, email, hash]);
    res.status(201).json({ message: 'Utilisateur créé' });
  } catch (err) {
    res.status(500).json({ message: 'Erreur serveur', error: err });
  }
};

exports.login = async (req, res) => {
  const { email, mot_de_passe } = req.body;
  try {
    const [rows] = await pool.query('SELECT * FROM Utilisateurs WHERE email = ?', [email]);
    if (rows.length === 0) {
      return res.status(400).json({ message: 'Email ou mot de passe incorrect' });
    }
    const utilisateur = rows[0];
    const match = await bcrypt.compare(mot_de_passe, utilisateur.mot_de_passe);
    if (!match) {
      return res.status(400).json({ message: 'Email ou mot de passe incorrect' });
    }
    const token = jwt.sign({ id: utilisateur.id, email: utilisateur.email }, process.env.JWT_SECRET, { expiresIn: '24h' });
    res.json({ token });
  } catch (err) {
    res.status(500).json({ message: 'Erreur serveur', error: err });
  }
};
