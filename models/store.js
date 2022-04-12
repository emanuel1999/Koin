const mongoose = require('mongoose');
const mongosePagination=require('mongoose-paginate-v2');

const StoreSchema = new mongoose.Schema({
  comercio:String,
  cuit: String,
  concepts:Array,
  currentBalance: Number,
  active: Boolean,
  lastSale: String,
},{ timestamps: true });


StoreSchema.pre('save', async function (callback) {
  //completar de ser necesario
});
StoreSchema.plugin(mongosePagination);


module.exports = mongoose.model('Store', StoreSchema);
