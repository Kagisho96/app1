import { Link } from "react-router-dom"

export const About = () => {
    return(
        <>
        <Link to={`/about`}></Link>
        <section className="pl-20 pr20">
            <article className="container">
                <h1>ContosoConf brings web designers and developers together</h1>
                <section>
                <p className="mb-4 leading-relaxed">
        Since the very first Contoso Conf back in 2009, we've been guided by three principles:
      </p>
      <ol className="list-decimal ml-6 mb-4">
        <li>Community Matters</li>
        <li>Never Stop Learning</li>
        <li>Have fun!</li>
      </ol>
      <p className="mb-4 leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae enim arcu, vitae aliquet purus. 
        Aenean rhoncus diam et orci porttitor fringilla. In porta lacus a turpis pretium placerat. Cras viverra 
        enim eu nibh pretium ornare. Praesent et adipiscing turpis. Duis mi risus, ornare at bibendum a, 
        ullamcorper vel tellus. Nulla in egestas velit. Aenean consequat mi sed tellus iaculis laoreet. Donec et 
        odio vel felis commodo porttitor.
      </p>
      <p className="mb-4 leading-relaxed">
        Aenean id ligula est. Pellentesque ut magna ligula. Donec nunc eros, tincidunt sit amet sollicitudin 
        in, semper id mauris. Phasellus odio nulla, molestie ac gravida sed, dignissim in nisl. Nunc luctus 
        lobortis massa at dapibus. Aenean turpis nibh, hendrerit nec congue et, elementum a justo. Aenean sit 
        amet nulla odio. Cras feugiat porta risus nec pretium.
      </p>
      <h2 className="text-xl font-bold mt-6 mb-4">What's It All About?</h2>
      <p className="mb-4 leading-relaxed">
        Donec vel sem ut dui vulputate porta. Phasellus imperdiet sapien a arcu adipiscing vitae adipiscing 
        elit pharetra. Donec sed ante ut eros mattis bibendum non in erat. Donec sagittis, massa eu accumsan 
        eleifend, eros justo cursus justo, id consequat mauris diam id magna. Vivamus quis tortor massa. Nam ipsum metus, 
        dapibus ac facilisis sit amet, ullamcorper quis risus. Integer aliquet eleifend accumsan.
      </p>
      <blockquote className="italic border-l-4 border-gray-400 pl-4 py-2 mb-4">
        I had a fantastic time and learnt so much!
      </blockquote>
      </section>
      </article>
      </section>

    </>

    );
  
};
