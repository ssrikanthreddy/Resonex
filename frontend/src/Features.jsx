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
              const elements = entry.target.querySelectorAll('h2, li');
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
        { threshold: 0.7 }
      ); // Trigger when at least 50% of the element is in viewport

      observer.observe(featuresRef.current);

      // Clean up observer on component unmount
      return () => {
        observer.disconnect();
      };
    }
  }, [animationTriggered]);

  return (
    <div id="features" className="features-container" ref={featuresRef}>
      <h2>Key Features</h2>
      <ul className="feature-list">
        <li>
          Disturbed Mind Analysis: Utilize advanced AI algorithms to analyze and
          assess disturbed and suicidal thoughts.
        </li>
        <li>
          Real-time Monitoring: Continuously monitor user-generated content for
          signs of distress and provide timely interventions.
        </li>
        <li>
          Mental Health Wellness Program: Offer users the option to opt in to a
          personalized mental health wellness program.
        </li>
        <li>
          User-Tuned Experience: Allow users to customize their mental health
          wellness model to suit their preferences.
        </li>
        <li>
          Privacy Protection: Ensure that user data is used only within the
          bounds of the platform&apos;s existing data access.
        </li>
      </ul>
    </div>
  );
};

export default Features;
