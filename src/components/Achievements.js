import React from 'react';

function Achievements() {
  const achievements = [
    "🏏 Best Chinaman Bowler In the MCA",
    "🏆 Bestesttt Female Playerrrr",
    "🌟 Team kaaa sitaraaaaa",
    "🦋 The Prettiest",
    "😎 Boldest and The one with a swaagggg",
    "😁 The Championnnn",
    "🔮 The Future Of Women's Cricketing worldddd",
    "😻 The Cutestttt of all",
    "😁 The Humorous oneee",
    "🥵 The Hottesstttt",
    "😏 The Smartesttt",
    "😳 The Unpredictableee",
    "😚 Sabkiii Laddlliiii",
  ];

  return (
    <section style={{ background: '#fff', color: '#333' }}>
      <h2>Achievements 🏅</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {achievements.map((achievement, index) => (
          <li key={index} style={{ margin: '10px 0', fontSize: '18px' }}>
            {achievement}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Achievements;
