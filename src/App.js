import {Component} from 'react'
import {
  AiFillAlipayCircle,
  AiOutlineSearch,
  AiOutlinePlusCircle,
  AiOutlineMinusCircle,
} from 'react-icons/ai'
import {RiHandHeartLine} from 'react-icons/ri'
import {GiHamburgerMenu} from 'react-icons/gi'
import {Dropdown, Carousel} from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

class App extends Component {
  state = {toggleText: false}

  searchChange = event => {
    event.preventDefault()
  }

  onClickToggle = () => {
    this.setState(prevState => ({toggleText: !prevState.toggleText}))
  }

  render() {
    const {toggleText} = this.state
    return (
      <div className="app-container">
        <div className="header-container">
          <AiFillAlipayCircle className="website-logo" />
          <ul className="tabs-list-container">
            <li className="tab-item">Experience 1440</li>
            <li className="tab-item">Our purpose</li>
            <li className="tab-item">Online Learning</li>
            <li className="tab-item">About 1440</li>
            <li className="tab-item">Stories</li>
            <li className="tab-item">
              <Dropdown>
                <Dropdown.Toggle
                  className="dropdown-class"
                  variant="white"
                  id="dropdown-basic"
                  size="sm"
                >
                  MORE
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
            <li className="red-item">Book Now</li>
            <li className="tab-item">
              <AiOutlineSearch className="search-icon" />
            </li>
          </ul>
          <div className="tabs-list-container-sm">
            <Dropdown>
              <Dropdown.Toggle
                className="dropdown-class"
                variant="white"
                id="dropdown-basic"
                size="sm"
              >
                <GiHamburgerMenu className="hamburger-menu" />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item>
                  <input
                    placeholder="Search"
                    className="input-class"
                    onChange={this.searchChange}
                  />
                </Dropdown.Item>
                <Dropdown.Item href="#/action-1">Experience 1440</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Our purpose</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Online Learning</Dropdown.Item>
                <Dropdown.Item href="#/action-4">About 1440</Dropdown.Item>
                <Dropdown.Item href="#/action-4">Stories</Dropdown.Item>
                <Dropdown.Item href="#/action-4">More</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
        <div className="carousel-container">
          <Carousel>
            <Carousel.Item interval={10000}>
              <img
                className="d-block w-100 image-class"
                src="https://res.cloudinary.com/srm-btech/image/upload/v1646585735/Vector%20Backgrounds/132518-geometric-abstract-dark-blue-background-vector_tte6gu.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={10000}>
              <img
                className="d-block w-100 image-class"
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F000%2F542%2F810%2Foriginal%2Fabstract-blue-background-in-premium-indian-style-template-design-for-cover-business-presentation-web-banner-wedding-invitation-and-luxury-packaging-vector-illustration-with-golden-border.jpg&f=1&nofb=1"
                alt="Second slide"
              />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={10000}>
              <img
                className="d-block w-100 image-class"
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F000%2F543%2F123%2Foriginal%2Fabstract-blue-background-in-premium-indian-style-template-design-for-cover-business-presentation-web-banner-wedding-invitation-and-luxury-packaging-vector-illustration-with-golden-border.jpg&f=1&nofb=1"
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="main-content">
          <h1 className="header-class">
            Do the hard work, especially when you dont feel like it.
          </h1>
          <hr />
          <div className="toggle-text-content-container">
            {!toggleText ? (
              <p className="lorem-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua....
              </p>
            ) : (
              <p className="full-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            )}
            <div className="border-toggle">
              <p className="line-para">_________</p>
              {toggleText ? (
                <button
                  type="button"
                  onClick={this.onClickToggle}
                  className="invisible-button"
                >
                  <AiOutlineMinusCircle className="plus-icon" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={this.onClickToggle}
                  className="invisible-button"
                >
                  <AiOutlinePlusCircle className="plus-icon" />
                </button>
              )}
              <p className="line-para">_________</p>
            </div>
          </div>
        </div>
        <div className="content-image-container">
          <img
            src="https://miro.medium.com/max/1200/1*4XRAX4obUOvMVqWibVCneQ.jpeg"
            className="image-content-class"
            alt="first"
          />
          <img
            src="https://www.stcolettawi.org/wp-content/uploads/2019/03/Make-a-Donation.png"
            className="image-content-class"
            alt="second"
          />
        </div>
        <div className="footer-container">
          <div className="first-footer">
            <RiHandHeartLine className="donation-icon" />
            <p className="donation-text">Make a donation</p>
          </div>
          <ul className="footer-container-list">
            <li className="footer-item">FAQs</li>
            <li className="footer-item">Blogs</li>
            <li className="footer-item">Gallery</li>
            <li className="footer-item">Health & Safety</li>
            <li className="footer-item">Contact Us</li>
            <li className="footer-item">1440.tv</li>
            <li className="footer-item">1440 Foundations</li>
            <li className="footer-item">Career</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default App
