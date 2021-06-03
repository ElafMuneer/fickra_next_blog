export default function About(){
    return(
    <section className="about">
            <div className="container">
                <h3 className="title">About me</h3>
                <div className="about-divider">
                    <div className="left"><img src="/img/cat.jpg" className="about-img" alt="profile picture"/></div>
                    <div className="right"><p className="about-text">I,m web developer from Mousl, Iraq . I love cats,coding and gaming and i always work to improve my skill.</p>
                        <div className="social">
                            <a href="https://www.facebook.com/Elaf.Muneer" ><i className="fab fa-facebook-square"></i></a>
                            <a href="https://twitter.com/" ><i className="fab fa-twitter-square"></i></a>
                            <a href="https://www.instagram.com/elaf.al_dabagh" ><i className="fab fa-instagram-square"></i></a>
                            <a href="https://github.com/ElafMuneer/" ><i className="fab fa-github-square"></i></a>
                        </div></div>
                </div>
                
                
            </div>
        </section>
    )
}