const mongoose = require('mongoose');
const plugins = require('./SectionPlugins');

const Section = new mongoose.Schema({
  title: { type: String, required: true },
  priority: { type: Number, required: true, default: 100 },
  show: { type: Boolean, required: true, default: false },
}, { toObject: { virtuals: true }, toJSON: { virtuals: true }, timestamps: true });

plugins.map(({ plugin }) => Section.plugin(plugin));
module.exports = mongoose.model('section', Section);
