// (C) Copyright 2014-2015 Hewlett-Packard Development Company, L.P.

var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;
var Link = Router.Link;

var GrommetDocument = require('grommet/components/Document');
var DocsHeader = require('../DocsHeader');
var Section = require('grommet/components/Section');
var DocsSplit = require('../DocsSplit');
var DocsMenu = require('../DocsMenu');
var Menu = require('grommet/components/Menu');
var Button = require('grommet/components/Button');

var HelloWorld = require('./HelloWorld');
var Tutorial = require('./Tutorial');
var ModularGrommet = require('./ModularGrommet');
var GetStarted = require('./GetStarted');
var Architecture = require('./Architecture');
var Integration = require('./Integration');

var ActionsDoc = require('./patterns/ActionsDoc');
var AppDoc = require('./components/AppDoc');
var ButtonDoc = require('./components/ButtonDoc');
var CalendarDoc = require('./components/CalendarDoc');
var ChartDoc = require('./components/ChartDoc');
var CheckBoxDoc = require('./components/CheckBoxDoc');
var DashboardDoc = require('./patterns/DashboardDoc');
var DistributionDoc = require('./components/DistributionDoc');
var DocumentDoc = require('./components/DocumentDoc');
var FooterDoc = require('./components/FooterDoc');
var FormDoc = require('./components/FormDoc');
var FormFieldDoc = require('./components/FormFieldDoc');
var HeaderDoc = require('./components/HeaderDoc');
var LayerDoc = require('./components/LayerDoc');
var LoginFormDoc = require('./components/LoginFormDoc');
var MapDoc = require('./components/MapDoc');
var MenuDoc = require('./components/MenuDoc');
var MeterDoc = require('./components/MeterDoc');
var NavigationDoc = require('./patterns/NavigationDoc');
var RadioButtonDoc = require('./components/RadioButtonDoc');
var RestDoc = require('./utils/RestDoc');
var RestWatchDoc = require('./utils/RestWatchDoc');
var SearchDoc = require('./components/SearchDoc');
var SearchInputDoc = require('./components/SearchInputDoc');
var SectionDoc = require('./components/SectionDoc');
var SidebarDoc = require('./components/SidebarDoc');
var SplitDoc = require('./components/SplitDoc');
var StatusDoc = require('./components/StatusDoc');
var TableDoc = require('./components/TableDoc');
var TilesDoc = require('./components/TilesDoc');
var TitleDoc = require('./components/TitleDoc');

//hjjs configuration
require("!style!css!highlight.js/styles/github.css");
var hljs = require('highlight.js/lib/highlight');
hljs.registerLanguage('bash', require('highlight.js/lib/languages/bash'));
hljs.registerLanguage('xml', require('highlight.js/lib/languages/xml'));
hljs.registerLanguage('javascript', require('highlight.js/lib/languages/javascript'));
hljs.registerLanguage('scss', require('highlight.js/lib/languages/scss'));

var CONTENTS = [
  {label: 'Guides',
    contents: [
      {route: 'develop_helloworld', label: 'Hello World', component: HelloWorld},
      {route: 'develop_getstarted', label: 'Get Started', component: GetStarted},
      {route: 'develop_tutorial', label: 'Tutorial', component: Tutorial},
      {route: 'develop_modulargrommet', label: 'Modular Grommet', component: ModularGrommet}
    ]
  },
  {label: 'Patterns',
    contents: [
      {route: 'develop_dashboard', label: 'Dashboard', component: DashboardDoc},
      {route: 'develop_navigation', label: 'Navigation', component: NavigationDoc},
      {route: 'develop_actions', label: 'Actions', component: ActionsDoc}
    ]
  },
  {label: 'Components',
    contents: [
      {route: 'develop_app', label: 'App', component: AppDoc},
      {route: 'develop_button', label: 'Button', component: ButtonDoc},
      {route: 'develop_calendar', label: 'Calendar', component: CalendarDoc},
      {route: 'develop_chart', label: 'Chart', component: ChartDoc},
      {route: 'develop_check-box', label: 'CheckBox', component: CheckBoxDoc},
      {route: 'develop_distribution', label: 'Distribution', component: DistributionDoc},
      {route: 'develop_document', label: 'Document', component: DocumentDoc},
      {route: 'develop_footer', label: 'Footer', component: FooterDoc},
      {route: 'develop_form', label: 'Form', component: FormDoc},
      {route: 'develop_form-field', label: 'FormField', component: FormFieldDoc},
      {route: 'develop_header', label: 'Header', component: HeaderDoc},
      {route: 'develop_layer', label: 'Layer', component: LayerDoc},
      {route: 'develop_login-form', label: 'LoginForm', component: LoginFormDoc},
      {route: 'develop_map', label: 'Map', component: MapDoc},
      {route: 'develop_menu', label: 'Menu', component: MenuDoc},
      {route: 'develop_meter', label: 'Meter', component: MeterDoc},
      {route: 'develop_radio-button', label: 'RadioButton', component: RadioButtonDoc},
      {route: 'develop_search', label: 'Search', component: SearchDoc},
      {route: 'develop_search-input', label: 'SearchInput', component: SearchInputDoc},
      {route: 'develop_section', label: 'Section', component: SectionDoc},
      {route: 'develop_sidebar', label: 'Sidebar', component: SidebarDoc},
      {route: 'develop_split', label: 'Split', component: SplitDoc},
      {route: 'develop_status', label: 'Status', component: StatusDoc},
      {route: 'develop_table', label: 'Table', component: TableDoc},
      {route: 'develop_tiles', label: 'Tiles', component: TilesDoc},
      {route: 'develop_title', label: 'Title', component: TitleDoc}
    ]
  },
  {label: 'Utils',
    contents: [
      {route: 'develop_rest', label: 'Rest', component: RestDoc},
      {route: 'develop_rest-watch', label: 'RestWatch', component: RestWatchDoc}
    ]
  },
  {label: 'Reference',
    contents: [
      {route: 'develop_architecture', label: 'Architecture', component: Architecture},
      {route: 'develop_integration', label: 'Integration', component: Integration}
    ]
  }
];

var Develop = React.createClass({

  _onClick: function () {
    // no-op
  },

  render: function () {
    return (
      <GrommetDocument>
        <DocsHeader />

        <Section flush={false} colorIndex="neutral-2">
          <h1>Develop</h1>
          <p>Grommet was created to give developers and designers alike access to tools
          that otherwise are out of reach of most product teams. Grommet’s goal is to
          assist in creating experiences that work accross the many different interaction
          methods and screen sizes.</p>
          <Menu direction="right" flush={false}>
            <Link to="develop_helloworld">
              <Button label="Hello Grommet!" onClick={this._onClick} large={true} primary={true} />
            </Link>
            <Link to="develop_getstarted">
              <Button label="Get Started" onClick={this._onClick} large={true} />
            </Link>
            <Link to="develop_tutorial">
              <Button label="Tutorial" onClick={this._onClick} large={true} />
            </Link>
            <Link to="develop_modulargrommet">
              <Button label="Modular Grommet" onClick={this._onClick} large={true} />
            </Link>
          </Menu>
        </Section>

        <Section flush={false}>
          <h2>Contents</h2>
          <DocsMenu direction="right" contents={CONTENTS} />
        </Section>
      </GrommetDocument>
    );
  }
});

var DevelopDocument = React.createClass({

  _highlightCode: function () {
    var domNode = this.getDOMNode();
    var nodes = domNode.querySelectorAll('pre code');
    for (var i = 0; i < nodes.length; i++) {
      hljs.highlightBlock(nodes[i]);
    }
  },

  componentDidMount: function () {
    setTimeout(this._highlightCode, 1);
  },

  componentDidUpdate: function () {
    setTimeout(this._highlightCode, 1);
  },

  render: function () {
    var title = <Link to="develop">Develop</Link>;
    return (
      <DocsSplit title={title} contents={CONTENTS} onChange={this._highlightCode}>
        <RouteHandler />
      </DocsSplit>
    );
  }
});

function createContentRoutes(contents) {
  var result = [];
  contents.forEach(function (content) {
    result.push(
      <Route key={content.label} name={content.route}
        path={content.label.toLowerCase().replace(/ /g, "-")}
        handler={content.component} />
    );
    if (content.hasOwnProperty('contents')) {
      result = result.concat(createContentRoutes(content.contents));
    }
  });
  return result;
}

Develop.routes = function () {
  var routes = createContentRoutes(CONTENTS);
  return [
    <Route key="top" name="develop" handler={Develop} />,
    <Route key="docs" path="develop" handler={DevelopDocument}>{routes}</Route>
  ];
};

module.exports = Develop;
