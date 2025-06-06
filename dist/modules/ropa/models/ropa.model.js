"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const RopaSchema = new Schema({
    ropa: {
        type: String,
        required: [true, 'ropa required'],
        unique: true
    }
});
const Ropa = mongoose.model("Ropa", RopaSchema);
exports.default = Ropa;
//# sourceMappingURL=ropa.model.js.map