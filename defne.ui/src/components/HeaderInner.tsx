
export default function Header() {
  return (

    <div className="header-inner">
      <div className="container">
        {/* Top Header */}
        <div className="header-top">
          <div className="row">
            <div className="col-sm-4 header-left col-xs-6">
              <ul className="nav">
            {/*     <li>
                  <a href="#">Find</a>
                </li>
                <li>
                  <a href="#">Contacts</a>
                </li> */}
              </ul>
            </div>
            <div className="col-sm-4 header-right col-sm-push-4  col-xs-6">
              <ul className="nav">
            {/*     <li>
                  <a href="#">Login</a>
                </li>
                <li>
                  <a href="#">Register</a>
                </li> */}
              </ul>
            </div>
            {/* Logo */}
            <div id="logo" className="col-sm-4 logo col-sm-pull-4">
              <a href="/home">
                <img alt="Defne Restaurant" src="/assets/imgs/logo-defne.png" />
              </a>
            </div>
          </div>
        </div>
        {/* Main Menu */}
        <nav id="primary-navigation" className="navbar" role="navigation">
          <div className="navbar-inner">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target="#navbar"
              >
                <span className="sr-only">Toggle navigation</span>{" "}
                <span className="icon-bar" /> <span className="icon-bar" />{" "}
                <span className="icon-bar" />
              </button>
              <h3 className="navbar-brand">Menu</h3>
            </div>
            <div id="navbar" className="navbar-collapse collapse">
              <ul className="nav navbar-nav">
                <li className="active">
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/about">ÜBER UNS</a>
                </li>
                <li>
                  <a href="/menu">SPEISEKARTE</a>
                  <div className="mega-menu">
                    <div className="mega-menu-inner">
                      <div className="mega-cols">
                        <ul className="sub-menu">
                          <li>
                            <a href="/menu#frühstück">Frühstück</a>
                          </li>
                          <li>
                            <a href="/menu#mittagessen">MITTAGESSEN</a>
                          </li>
                          <li>
                            <a href="/menu#abendessen">ABENDESSEN</a>
                          </li>
                          <li>
                            <a href="/menu#besondere_anlässe">BESONDERE ANLÄSSE</a>
                          </li>
                        </ul>
                      </div>
                  {/*     <div className="mega-cols">
                        <div className="mega-text">
                          <figure>
                            <img
                              alt=""
                              src="../images/mega-menu/mega-menu.jpg"
                            />
                            <figcaption>
                              Classical Latin literature from 45 BC, making...
                            </figcaption>
                          </figure>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </li>
              </ul>
              <ul className="nav navbar-nav">
                <li>
                  <a href="/galleries">RESTAURANT</a>
                </li>
                <li>
                  <a href="/contacts">KONTAKTE</a>
                </li>
              </ul>
            </div>
            {/*/.navbar-collapse */}
          </div>
        </nav>
      </div>
    </div>

  )
}