import React from 'react';
import Interactive from 'react-interactive';
import { Switch, Route, Link } from 'react-router-dom';
// import ExampleTwoDeepComponent from './ExampleTwoDeepComponent';
import PageNotFound from './PageNotFound';
import s from '../styles/exampleComponent.style';

const ExamplePageText = () => (
  <p style={s.p}>
    This is an example page. Refresh the page or copy/paste the url to
    test out the redirect functionality (this same page should load
      after the redirect).
  </p>
);

export default function WorkPortfolio() {
  return (
    <div style={{background:'blue', position:'absolute', zIndex:1}}>ASS!!
      <br/>
      assets<br/>
      assets<br/>
      assets<br/>
      assets<br/>
      assets<br/>
      assets<br/>
      assets<br/>
      assets<br/>
      assets<br/>
      assets<br/>
      assets<br/>
      assets
    </div>
    // <Switch>
    //   <Route
    //     exact path="/example/two-deep"
    //     render={({ location }) => (
    //       <div>
    //         <ExamplePageText />
    //         <ExampleTwoDeepComponent location={location} />
    //       </div>
    //     )}
    //   />
    //   <Route
    //     exact path="/example"
    //     render={() => (
    //       <div>
    //         <ExamplePageText />
    //         <div style={s.pageLinkContainer}>
    //           <Interactive
    //             as={Link}
    //             {...s.link}
    //             to="/example/two-deep?field1=foo&field2=bar#boom!"
    //           >Example two deep with query and hash</Interactive>
    //         </div>
    //       </div>
    //     )}
    //   />
    //   <Route component={PageNotFound} />
    // </Switch>
  );
}