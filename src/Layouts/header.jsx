
import { Container, IconButton } from "@mui/material";
import './CSS/header.css';
import LoginIcon from '@mui/icons-material/Login';


function Header() {
  return (
    <Container class="header">
      <img src="logo.png" alt="Logo USAC" className="logo" />
      <nav>
        <ul>
          {/* <li><a href="/">Home</a></li> */}
          <li><a href="/news">News</a></li>
          <li><a href="/facts">Facts</a></li>
          <li><a href="/calendars">Calendars</a></li>
          <li><a href="/academic">Academic <br /> Articles</a></li>
          <li><a href="/science">Science</a></li>
          <li><a href="/activities">Activities</a></li>
          <li><a href="/aboutus">About us</a></li>
        </ul>
      </nav>

      <div className="search-container">
        <input type="text" placeholder="Type here for searching..." className="search-input" />
        <button type="submit" className="search-button">🔍</button>
      </div>

      <IconButton
        sx={{ backgroundColor: '#3b5998', mx: 0.5 }}
        color="inherit"
      >
      <LoginIcon />
    </IconButton>
    </Container >
  );
}

export default Header;
