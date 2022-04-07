import './slider.js';
import './user-form.js';
import './filter.js';
import { QUANTITY_OFFERS } from './data.js';
import { renderBaloons } from './map.js';
import { receiveData } from './api.js';

receiveData((data) => {
  renderBaloons(data.slice(0, QUANTITY_OFFERS));
});
