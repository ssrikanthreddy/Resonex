import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const Features = () => {
  const featuresRef = useRef(null);
  const [animationTriggered, setAnimationTriggered] = useState(false);

  useEffect(() => {
    if (!animationTriggered) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const elements =
                entry.target.querySelectorAll('.features-heading, .centre-img, .feature-box');
              elements.forEach((element) => {
                gsap.fromTo(
                  element,
                  { opacity: 0 },
                  { opacity: 1, duration: 2, stagger: 0.01, ease: 'power2.out' }
                );

                gsap.fromTo(
                  element,
                  { y: '40px' },
                  { y: '0%', duration: 0.4, stagger: 0.01, ease: 'power2.out' }
                );
              });
              setAnimationTriggered(true); // Mark animation as triggered
            }
          });
        },
        { threshold: 0.6 }
      ); // Trigger when at least 50% of the element is in viewport

      observer.observe(featuresRef.current);

      // Clean up observer on component unmount
      return () => {
        observer.disconnect();
      };
    }
  }, [animationTriggered]);

  return (
    <>
      <div className="features-container" ref={featuresRef}>
        <h2 className="features-heading">Features</h2>
        <div className="main-features">
          <div className="feature-box">
            <div>
              <h3>Real-time Monitoring</h3>
              <p>
                Continuously monitor user-generated content for signs of
                distress and provide timely interventions
              </p>
            </div>
            <div>
              <h3>Disturbed Mind Analysis</h3>
              <p>
                Utilize advanced AI algorithms to analyze and assess disturbed
                and suicidal thoughts.
              </p>
            </div>
          </div>
          <div className="centre-img">
            <img
              style={{ width: ' 500px', height: '500px' }}
              src="./src/assets/ResonexLogo.png"
            ></img>
          </div>
          <div className="feature-box">
            <div>
              <h3>Mental Health Wellness Program</h3>
              <p>
                Offer users the option to opt in to a personalized mental health
                wellness program
              </p>
            </div>
            <div>
              <h3>User-Tuned Experience</h3>
              <p>
                Allow users to customize their mental health wellness model to
                suit their preferences
              </p>
            </div>
          </div>
        </div>
        <div className=" feature-box sep-feature">
          <div>
            <h3>Privacy Protection</h3>
            <p>
              Ensure that user data is used only within the bounds of the
              platform&apos;s existing data access
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
