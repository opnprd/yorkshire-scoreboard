import aggregator from '../utils/aggregator.js';
import Blob from './Blob.jsx';

export default function Drilldown(props) {
  const { data, dimension, category } = props;
  const fData = data.filter((_) => _[dimension] === category);
  const value = aggregator({ data: fData });
  const title = category;
  return <Blob value={ value } title={ title } />;
}