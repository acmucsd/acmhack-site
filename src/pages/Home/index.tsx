import React from 'react';
import LandingCard from 'components/LandingCard';
import Description from 'components/Description';
import EventList from 'containers/Events/EventsListContainer';
import NavBar from 'components/NavBar';
import './style.less';
import Team from 'components/Team';
import { siteConfigs } from 'configs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faKeyboard, faEdit, faTools, faUserFriends, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(faKeyboard);
library.add(faEdit);
library.add(faTools);
library.add(faUserFriends);
library.add(faCalendarAlt);
library.add(fab);

const Home = () => {
  return (
    <div className="Home">
      <NavBar />
      <LandingCard />
      <div className="container">
        <Description title="Yes, we like to code. " icon={<FontAwesomeIcon size="xs" icon="keyboard" />}>
          We are a community in ACM @ UCSD focused on learning more about software engineering and exploring what is
          possible through code. We frequently host workshop aimed at empowering students to create amazing projects, as
          well as events to help students learn more about software engineering and finding their path. Our events are
          for people of all skill levels, so whether you're a first-time coder or a skilled programmer, we'd be happy to
          have you join the ACM Hack community!
        </Description>
        <Description title="Get Involved " icon={<FontAwesomeIcon size="xs" icon="user-friends" />} noimage>
          <ul>
            <li>
              <FontAwesomeIcon icon={['fab', 'discord']} />
              &nbsp;Join our <a href={siteConfigs.links.discord}>Discord server</a>
              <p>
                Stay updated with event announcements, talk about your favorite programming languages, and hang out with
                other members!
              </p>
            </li>
            <br></br>
            <li>
              <FontAwesomeIcon icon="edit" />
              &nbsp;Apply to the <a href={siteConfigs.links.staff}>HackSquad</a>
              <p>
                Want to help behind the scenes? HackSquad members will be able to help create and teach workshops,
                gaining exposure to different technologies and skills. No prior experience necessary, just a willingness
                to learn!
              </p>
            </li>
            <br></br>
            <li>
              <FontAwesomeIcon icon="tools" />
              &nbsp;Apply to our <a href={siteConfigs.links.projects}>projects program</a>
              <p>
                New this quarter! A great way to get hands-on experience building your first side project for your
                resume. We'll offer the resources and mentorship to ensure your success.
              </p>
            </li>
          </ul>
        </Description>
        <h2>
          Upcoming Events <FontAwesomeIcon size="xs" icon="calendar-alt" />
        </h2>
        <p>Come to one of our workshops and learn something new!</p>
        <EventList limit={4} />
        <Team />
      </div>
    </div>
  );
};

export default Home;
