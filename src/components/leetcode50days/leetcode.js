import { useEffect, useRef } from 'react';
import Image from '../../asset/leetcode.png';
import './leetcode.css';

const Leetcode = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            },
            {
                threshold: 0.15,
            }
        );

        const element = sectionRef.current;
        if (element) {
            observer.observe(element);
        }

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, []);

    return (
        <section ref={sectionRef} id="leetcode" className="leetcode">
            <div className="leetcode-content">
                <h2 className="section-title">
                    <span className="section-number">05.</span> LeetCode
                </h2>
                <div className="leetcode-card">
                    <div className="leetcode-info">
                        <p className="leetcode-label">Coding Profile</p>
                        <h3>350+ Questions Solved</h3>
                        <p>
                            Solved coding questions across LeetCode, GeeksforGeeks, and other
                            platforms, including the LeetCode 50 Days Badge 2023.
                        </p>
                        <div className="leetcode-stats">
                            <span>Easy: 68</span>
                            <span>Medium: 103</span>
                            <span>Hard: 8</span>
                        </div>
                        <a
                            className="leetcode-link"
                            href="https://leetcode.com/u/sohamkavde/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View LeetCode Profile
                        </a>
                    </div>
                    <div className="leetcode-image">
                        <img src={Image} alt="Soham Kavde LeetCode profile stats" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Leetcode;