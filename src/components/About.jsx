import { Link } from "react-router-dom"

export const About = () => {
    return(
        <>
        <Link to={`/about`}></Link>
        <section class="page-section about">
            <article class="container">
                <h1>ContosoConf brings web designers and developers together</h1>
                <section>
                    <p>
                        Since the very first Contoso Conf back in 2009, we've been guided by three principles:
                    </p>
                    <ol>
                        <li>Community Matters</li>
                        <li>Never Stop Learning</li>
                        <li>Have fun!</li>
                    </ol>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae enim arcu, vitae aliquet purus. 
                        Aenean rhoncus diam et orci porttitor fringilla. In porta lacus a turpis pretium placerat. Cras viverra 
                        enim eu nibh pretium ornare. Praesent et adipiscing turpis. Duis mi risus, ornare at bibendum a, 
                        ullamcorper vel tellus. Nulla in egestas velit. Aenean consequat mi sed tellus iaculis laoreet. Donec et 
                        odio vel felis commodo porttitor.
                    </p>
                    <p>
                        Aenean id ligula est. Pellentesque ut magna ligula. Donec nunc eros, tincidunt sit amet sollicitudin 
                        in, semper id mauris. Phasellus odio nulla, molestie ac gravida sed, dignissim in nisl. Nunc luctus 
                        lobortis massa at dapibus. Aenean turpis nibh, hendrerit nec congue et, elementum a justo. Aenean sit 
                        amet nulla odio. Cras feugiat porta risus nec pretium.
                    </p>
    
                    <h2>What's It All About?</h2>
                    <p>
                        Donec vel sem ut dui vulputate porta. Phasellus imperdiet sapien a arcu adipiscing vitae adipiscing 
                        elit pharetra. Donec sed ante ut eros mattis bibendum non in erat. Donec sagittis, massa eu accumsan 
                        eleifend, eros justo cursus justo, id consequat mauris diam id magna. Vivamus quis tortor massa. Nam ipsum metus, 
                        dapibus ac facilisis sit amet, ullamcorper quis risus. Integer aliquet eleifend accumsan.
                    </p>
                    <blockquote>I had a fantastic time and learnt so much!</blockquote>
                    <p>
                        Pellentesque facilisis blandit augue id rhoncus. Sed facilisis varius lectus, eget commodo purus dapibus 
                        nec. In hac habitasse platea dictumst. Etiam imperdiet facilisis malesuada. Nunc semper venenatis elit ac 
                        lobortis. Duis lorem lorem, pharetra ut scelerisque nec, consequat sed risus. Morbi rutrum nisl ut ipsum 
                        consectetur porttitor. Phasellus sed nunc id diam tempus congue in a leo.
                    </p>
                    <p>
                        Proin feugiat, turpis id tempor tempor, lorem libero malesuada.
                    </p>
                </section>
            </article>
        </section>

    </>

    );
  
};
