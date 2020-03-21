import React from "react";
import { Grid, Image } from "semantic-ui-react";

const SiteGrid = props => (
  <Grid textAlign="center">
    <Grid.Row columns={1}>
      <Grid.Column>
        <h1 className="masthead">Covid-19 - India</h1>
        <Image src="covid.jpg" size="tiny" centered />
      </Grid.Column>
    </Grid.Row>
    <Grid.Row columns={3}>
      <Grid.Column>
        <h3>Total Deaths</h3>
        <h1 className="deaths">{props.deaths}</h1>
        <h5 className="deaths">
          Fatality Rate : {((props.deaths * 100) / props.cases).toFixed(2)}%
        </h5>
      </Grid.Column>
      <Grid.Column>
        <h3>Total Cases</h3>
        <h1>{props.cases}</h1>
      </Grid.Column>

      <Grid.Column>
        <h3>Total Recovered</h3>
        <h1 className="recovered">{props.recovered}</h1>
        <h5 className="recovered">
          Recovery Rate : {((props.recovered * 100) / props.cases).toFixed(2)}%
        </h5>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);
export default SiteGrid;