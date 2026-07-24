import { useState } from "react";

const userData = {
  name: "Marwin Mandocdoc",
  avatarUrl:
    "https://scontent.fmnl30-3.fna.fbcdn.net/v/t39.30808-1/684914672_122198437808924414_8148160538804870011_n.jpg?stp=dst-jpg_tt6&cstp=mx1080x1080&ctp=s200x200&_nc_cat=100&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeGXfFc_5-nKxqS1YLd-trrGGjOHuEw72PwaM4e4TDvY_BYYo-2a6FFUTOYnE1XbKMxls-rmvKo0_rQI6xJJw0wy&_nc_ohc=nV1MxzTmjhkQ7kNvwH6D2nT&_nc_oc=AdoS8m2Rk1mPT9Q144EL8-zjeqbFXnb0XFsj72frbfQdeopOUDxkOXLePRlYKJmjU20&_nc_zt=24&_nc_ht=scontent.fmnl30-3.fna&_nc_gid=0GMP-qL5LUUouCZtnveSLQ&_nc_ss=7b2a8&oh=00_AQCD7-wginx1Zfwjela5Z862VEew1Ru5XtlTGgEtRbNS8Q&oe=6A680D38",
  bio: "BSIS 3 Student at LVCC",
  skills: ["React", "JavaScript", "HTML", "CSS", "Laravel", "PHP"],
  isOnline: true,
  lastUpdated: "1 minute ago",
};

function UserProfileCard() {
  const [messageCount, setMessageCount] = useState(0);
  const [isFavorited, setIsFavorited] = useState(false);

  function handleSendMessage() {
    setMessageCount(messageCount + 1);
  }

  function handleReset() {
    setMessageCount(0);
  }

  function handleToggleFavorite() {
    setIsFavorited(!isFavorited);
  }

  return (
    <>
      <div className="profile-card">
        <img src={userData.avatarUrl} />

        <h2>{userData.name}</h2>

        <label htmlFor="bio">Bio</label>
        <p id="bio">{userData.bio}</p>

        <h3>Skills</h3>
        <ul>
          {userData.skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>

        <div style={{ color: "blue", fontWeight: "bold" }}>
          Messages sent: {messageCount}
        </div>

        {userData.isOnline ? <span>🟢 Online</span> : <span>⚪ Offline</span>}

        <br />
        <br />

        <button onClick={handleSendMessage}>Send Message</button>
        <button onClick={handleReset}>Reset</button>

        {userData.isOnline && (
          <button onClick={handleToggleFavorite}>
            {isFavorited ? "★ Favorited" : "☆ Favorite"}
          </button>
        )}
      </div>
      <p className="footer">Card last updated: {userData.lastUpdated}</p>
    </>
  );
}

export default function App() {
  return (
    <div>
      <UserProfileCard user={userData} />
    </div>
  );
}
