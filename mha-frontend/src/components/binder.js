import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './categories';
import BaseComponent from './Charts';
import AllTimeViewCharts from './AllTimeViewCharts'
import TimeCharts from './TimeCharts'
import AnalyticChart from './AnalyticChart';

const categories = [
  {
    id: 1,
    name: 'Acousticness',
    description: 'A confidence measure from 0.0 to 1.0 of whether the track is acoustic.',
    color: '#8884d8'
  },
  {
    id: 2,
    name: 'Danceability',
    description: 'Danceability describes how suitable a track is for dancing based on a combination of musical elements including tempo, rhythm stability, beat strength, and overall regularity. A value of 0.0 is least danceable and 1.0 is most danceable',
    color: '#00ff00'
  },
  {
    id: 3,
    name: 'Instrumentalness',
    description: 'Predicts whether a track contains no vocals. The closer the instrumentalness value is to 1.0, the greater likelihood the track contains no vocal content.',
    color: '#87ceeb'
  },
  {
    id: 4,
    name: 'Liveness',
    description: 'Detects the presence of an audience in the recording. Higher liveness values represent an increased probability that the track was performed live.',
    color: '#c8c813'
  },
  {
    id: 5,
    name: 'Speechiness',
    description: 'Speechiness detects the presence of spoken words in a track. The more exclusively speech-like the recording the closer to 1.0 the attribute value. Values above 0.66 describe tracks that are probably made entirely of spoken words. Values between 0.33 and 0.66 describe tracks that may contain both music and speech, either in sections or layered, including such cases as rap music. Values below 0.33 most likely represent music and other non-speech-like tracks',
    color: '#ff6347'
  },
  {
    id: 6,
    name: 'Energy',
    description: 'Energy is a measure from 0.0 to 1.0 and represents a perceptual measure of intensity and activity.',
    color: '#ffa500'
  },
  {
    id: 7,
    name: 'Loudness',
    description: 'The overall loudness of a track in decibels (dB). Loudness values are averaged across the entire track and are useful for comparing relative loudness of tracks.  Values typically range between -60 and 0 db.',
    color: '#ffc658',
    key: 'loudness',
    fill:"#ffc658"
  },
  {
    id: 8,
    name: 'Valence',
    description: 'A measure from 0.0 to 1.0 describing the musical positiveness conveyed by a track. Tracks with high valence sound more positive (e.g. happy, cheerful, euphoric), while tracks with low valence sound more negative',
    color: '#8ebf42',
    key: 'valence',
    fill:"#8ebf42"
  },
  {
    id: 9,
    name: 'Tempo',
    description: 'The overall estimated tempo of a track in beats per minute (BPM). In musical terminology, tempo is the speed or pace of a given piece and derives directly from the average beat duration.',
    color: '#ffc0cb',
    key: 'tempo',
    fill:"#8884d8"
  },
  {
    id: 10,
    name: 'Duration',
    description: 'Duration of a song',
    color: '#008080',
    key: 'duration_min_decimal',
    key_min: 'duration_min_sec.minutes',
    key_sec: 'duration_min_sec.seconds',
    fill:"#82ca9d"
  },
  {
    id: 11,
    description: 'Average of audio features',
    name: 'Average',
    color: '#ABF31C',
    fill:"#ABF31C"
  }
];

class Binder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedcategories: [],
      selectedCategory: categories[6]
    };
  }

  handleCategoryChange = (category) => {
    this.setState({ selectedCategory: category, selectedCategory:category});
    const { selectedcategories } = this.state;
    if(category.name != "Tempo" && category.name != "Duration" && category.name != "Loudness" && category.name != "Valence"){
      if (selectedcategories.includes(category)) {
        this.setState({ selectedcategories: selectedcategories.filter(c => c !== category) });
      } else {
        this.setState({ selectedcategories: [...selectedcategories, category] });
      }
  }
  };

  render() {
    const { selectedcategories,selectedCategory } = this.state;

    return (
      <BrowserRouter>
        <div className='container'>
          <div className="sidebar">
            <Sidebar categories={categories} onChange={this.handleCategoryChange} />
          </div>
          <div className='basecomponent'>
            <Routes>
              <Route path="/category/categories" element={<BaseComponent category={selectedcategories} />} />
              <Route path="/category/timeCharts" element = {<TimeCharts category={selectedCategory} />} />
              <Route path="/category/allTimeCharts" element={<AllTimeViewCharts category ={selectedCategory} />} />
              <Route path="/category/average" element={<AnalyticChart />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default Binder;
