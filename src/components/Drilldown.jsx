import aggregator from '../utils/aggregator.js';
import Blob from './Blob.jsx';

export default function Drilldown(props) {
  const { data, dimension, category, title } = props;
  const fData = data.filter((_) => _[dimension] === category);
  const value = aggregator({ data: fData });
  return <Blob value={ value } />;
}