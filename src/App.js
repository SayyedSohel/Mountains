import "./styles.css";

export default function App() {
  return (
    <body>
      <header>
        <div class="container">
          <div class="header-content">
            <div class="logo-wrapper">
              <img
                src="images/logo-icon.png"
                alt="LosAngeles Mountains logo icon"
              />

              <img
                src="images/logo-text.png"
                alt="LosAngeles Mountains logo text"
              />
            </div>

            <nav>
              <ul>
                <li>
                  <a href="#history">01. History</a>
                </li>

                <li>
                  <a href="#team">02. Team</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <section id="hero">
        <h1>LosAngeles Mountains</h1>
      </section>

      <section id="history">
        <div class="container">
          <div class="history-content">
            <h2 class="big-h2">
              <span>01.</span>

              <span>History</span>
            </h2>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in
              ante viverra, rutrum erat rutrum, consectetur mi. Proin at maximus
              est. Nullam purus ex, iaculis sed erat sed, blandit tincidunt
              quam. Cras scelerisque id quam sed dignissim Pellentesque urna
              nunc, gravida quis hendrerit ac, tristique ut quam. Vivamus
              suscipit dignissim tortor nec congue.{" "}
            </p>
          </div>
        </div>

        <div class="carousel">
          <div class="container">
            <div class="carousel-content">
              <div class="image-wrapper">
                <div>
                  <img src="images/carousel-1.png" />
                </div>

                <div>
                  <img src="images/carousel-2.png" />
                </div>

                <div>
                  <img src="images/carousel-1.png" />
                </div>

                <div>
                  <img src="images/carousel-2.png" />
                </div>
              </div>

              <div class="button-wrapper">
                <a class="dot active"></a>

                <a class="dot"></a>

                <a class="dot"></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="team">
        <div class="container">
          <div class="team-content">
            <h2 class="big-h2">
              <span>02.</span>

              <span>Climb</span>
            </h2>

            <p>
              Cras scelerisque id quam sed dignissim Pellentesque urna nunc,
              gravida quis hendrerit ac, tristique ut quam. Vivamus suscipit
              dignissim tortor nec congue.{" "}
            </p>
          </div>
        </div>

        <div id="tabs">
          <div class="tabs-wrapper">
            <div class="container">
              <ul class="tabs-list">
                <li>
                  <a href="#tab-1">
                    <h4>Mountain 1</h4>
                  </a>
                </li>

                <li>
                  <a href="#tab-2">
                    <h4>Mountain 2</h4>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div id="tab-1" class="tab-content">
            <div class="container">
              <div class="schedule-content">
                <div class="schedule-card">
                  <h2>Schedule</h2>

                  <div class="schedule-grid">
                    <div>25 Nov 2016</div>

                    <div>Vestibulum viverra</div>

                    <div>28 Nov 2016</div>

                    <div>Vestibulum viverra</div>
                  </div>

                  <div class="schedule-grid">
                    <div>18 Dec 2016</div>

                    <div>Vestibulum viverra</div>
                  </div>

                  <div class="schedule-grid">
                    <div>7 Jan 2017</div>

                    <div>Vestibulum viverra</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="tab-2" class="tab-content">
            <div class="container">
              <div class="schedule-content">
                <div class="schedule-card">
                  <h2>Schedule</h2>

                  <div class="schedule-grid">
                    <div>17 Nov 2016</div>

                    <div>Vestibulum viverra</div>
                  </div>

                  <div class="schedule-grid">
                    <div>13 Dec 2016</div>

                    <div>Vestibulum viverra</div>

                    <div>28 Dec 2016</div>

                    <div>Vestibulum viverra</div>
                  </div>

                  <div class="schedule-grid">
                    <div>9 Feb 2017</div>

                    <div>Vestibulum viverra</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="accordion">
          <a href="#tab-1">
            <h4>Mountain 1</h4>
          </a>

          <div id="tab-1" class="tab-content">
            <div class="container">
              <div class="schedule-content">
                <div class="schedule-card">
                  <h2>Schedule</h2>

                  <div class="schedule-grid">
                    <div>25 Nov 2016</div>

                    <div>Vestibulum viverra</div>

                    <div>28 Nov 2016</div>

                    <div>Vestibulum viverra</div>
                  </div>

                  <div class="schedule-grid">
                    <div>18 Dec 2016</div>

                    <div>Vestibulum viverra</div>
                  </div>

                  <div class="schedule-grid">
                    <div>7 Jan 2017</div>

                    <div>Vestibulum viverra</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <a href="#tab-2">
            <h4>Mountain 2</h4>
          </a>

          <div id="tab-2" class="tab-content">
            <div class="container">
              <div class="schedule-content">
                <div class="schedule-card">
                  <h2>Schedule</h2>

                  <div class="schedule-grid">
                    <div>17 Nov 2016</div>

                    <div>Vestibulum viverra</div>
                  </div>

                  <div class="schedule-grid">
                    <div>13 Dec 2016</div>

                    <div>Vestibulum viverra</div>

                    <div>28 Dec 2016</div>

                    <div>Vestibulum viverra</div>
                  </div>

                  <div class="schedule-grid">
                    <div>9 Feb 2017</div>

                    <div>Vestibulum viverra</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div class="container">
          <div class="footer-content">
            <img
              src="images/footer-logo.png"
              alt="LosAngeles Mountains footer icon"
            />

            <div>COPYRIGHT 2016. ALL RIGHTS RESERVED.</div>
          </div>
        </div>
      </footer>
    </body>
  );
}
