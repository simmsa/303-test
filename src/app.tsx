import * as React from 'react';
import * as ReactDOM from 'react-dom';

import 'whatwg-fetch';

interface Person {
  birth_year: string;
  eye_color: string;
  gender: string;
  hair_color: string;
  mass: string;
  skin_color: string;
}

interface AppState {
  isLoading: boolean;
  data: any;
}

class App extends React.Component<{}, AppState> {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      data: undefined,
    };

    this.fetchData = this.fetchData.bind(this);
  }

  private fetchData() {
    const url = 'https://swapi.co/api/people/?format=json';
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        this.setState({
          isLoading: false,
          data: this.parseData(json),
        });
      });
  }

  private parseData(data: any) {
    const people: Person[] = data.results;
    return people;
  }

  public componentDidMount() {
    this.fetchData();
  }

  public render() {
    if (this.state.isLoading) {
      return <div>Loading...</div>;
    }
    return (
      <ul>
        {this.state.data.map((person) => {
          return (
            <li key={person.name}>
              {person.name}
              <ul>
                <li>Born: {person.birth_year}</li>
                <li>Gender: {person.gender}</li>
                <li>Mass: {person.mass}</li>
                <li>Height: {person.height}</li>
                <li>Skin Color: {person.skin_color}</li>
                <li>Eye Color: {person.eye_color}</li>
              </ul>
            </li>
          );
        })}
      </ul>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('reactContainer'));
