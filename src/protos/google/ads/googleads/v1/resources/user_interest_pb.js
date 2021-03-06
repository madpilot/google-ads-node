/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var google_ads_googleads_v1_common_criterion_category_availability_pb = require('../../../../../google/ads/googleads/v1/common/criterion_category_availability_pb.js');
var google_ads_googleads_v1_enums_user_interest_taxonomy_type_pb = require('../../../../../google/ads/googleads/v1/enums/user_interest_taxonomy_type_pb.js');
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
goog.exportSymbol('proto.google.ads.googleads.v1.resources.UserInterest', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.ads.googleads.v1.resources.UserInterest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.ads.googleads.v1.resources.UserInterest.repeatedFields_, null);
};
goog.inherits(proto.google.ads.googleads.v1.resources.UserInterest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.google.ads.googleads.v1.resources.UserInterest.displayName = 'proto.google.ads.googleads.v1.resources.UserInterest';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.ads.googleads.v1.resources.UserInterest.repeatedFields_ = [7];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.ads.googleads.v1.resources.UserInterest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.ads.googleads.v1.resources.UserInterest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.ads.googleads.v1.resources.UserInterest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v1.resources.UserInterest.toObject = function(includeInstance, msg) {
  var f, obj = {
    resourceName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    taxonomyType: jspb.Message.getFieldWithDefault(msg, 2, 0),
    userInterestId: (f = msg.getUserInterestId()) && google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance, f),
    name: (f = msg.getName()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    userInterestParent: (f = msg.getUserInterestParent()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    launchedToAll: (f = msg.getLaunchedToAll()) && google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance, f),
    availabilitiesList: jspb.Message.toObjectList(msg.getAvailabilitiesList(),
    google_ads_googleads_v1_common_criterion_category_availability_pb.CriterionCategoryAvailability.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.ads.googleads.v1.resources.UserInterest}
 */
proto.google.ads.googleads.v1.resources.UserInterest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.ads.googleads.v1.resources.UserInterest;
  return proto.google.ads.googleads.v1.resources.UserInterest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.ads.googleads.v1.resources.UserInterest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.ads.googleads.v1.resources.UserInterest}
 */
proto.google.ads.googleads.v1.resources.UserInterest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setResourceName(value);
      break;
    case 2:
      var value = /** @type {!proto.google.ads.googleads.v1.enums.UserInterestTaxonomyTypeEnum.UserInterestTaxonomyType} */ (reader.readEnum());
      msg.setTaxonomyType(value);
      break;
    case 3:
      var value = new google_protobuf_wrappers_pb.Int64Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader);
      msg.setUserInterestId(value);
      break;
    case 4:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setName(value);
      break;
    case 5:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setUserInterestParent(value);
      break;
    case 6:
      var value = new google_protobuf_wrappers_pb.BoolValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader);
      msg.setLaunchedToAll(value);
      break;
    case 7:
      var value = new google_ads_googleads_v1_common_criterion_category_availability_pb.CriterionCategoryAvailability;
      reader.readMessage(value,google_ads_googleads_v1_common_criterion_category_availability_pb.CriterionCategoryAvailability.deserializeBinaryFromReader);
      msg.addAvailabilities(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.ads.googleads.v1.resources.UserInterest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.ads.googleads.v1.resources.UserInterest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.ads.googleads.v1.resources.UserInterest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v1.resources.UserInterest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResourceName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTaxonomyType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getUserInterestId();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter
    );
  }
  f = message.getName();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getUserInterestParent();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getLaunchedToAll();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter
    );
  }
  f = message.getAvailabilitiesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      google_ads_googleads_v1_common_criterion_category_availability_pb.CriterionCategoryAvailability.serializeBinaryToWriter
    );
  }
};


/**
 * optional string resource_name = 1;
 * @return {string}
 */
proto.google.ads.googleads.v1.resources.UserInterest.prototype.getResourceName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.ads.googleads.v1.resources.UserInterest.prototype.setResourceName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.ads.googleads.v1.enums.UserInterestTaxonomyTypeEnum.UserInterestTaxonomyType taxonomy_type = 2;
 * @return {!proto.google.ads.googleads.v1.enums.UserInterestTaxonomyTypeEnum.UserInterestTaxonomyType}
 */
proto.google.ads.googleads.v1.resources.UserInterest.prototype.getTaxonomyType = function() {
  return /** @type {!proto.google.ads.googleads.v1.enums.UserInterestTaxonomyTypeEnum.UserInterestTaxonomyType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {!proto.google.ads.googleads.v1.enums.UserInterestTaxonomyTypeEnum.UserInterestTaxonomyType} value */
proto.google.ads.googleads.v1.resources.UserInterest.prototype.setTaxonomyType = function(value) {
  jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional google.protobuf.Int64Value user_interest_id = 3;
 * @return {?proto.google.protobuf.Int64Value}
 */
proto.google.ads.googleads.v1.resources.UserInterest.prototype.getUserInterestId = function() {
  return /** @type{?proto.google.protobuf.Int64Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int64Value, 3));
};


/** @param {?proto.google.protobuf.Int64Value|undefined} value */
proto.google.ads.googleads.v1.resources.UserInterest.prototype.setUserInterestId = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.google.ads.googleads.v1.resources.UserInterest.prototype.clearUserInterestId = function() {
  this.setUserInterestId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.ads.googleads.v1.resources.UserInterest.prototype.hasUserInterestId = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.StringValue name = 4;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.google.ads.googleads.v1.resources.UserInterest.prototype.getName = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 4));
};


/** @param {?proto.google.protobuf.StringValue|undefined} value */
proto.google.ads.googleads.v1.resources.UserInterest.prototype.setName = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.google.ads.googleads.v1.resources.UserInterest.prototype.clearName = function() {
  this.setName(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.ads.googleads.v1.resources.UserInterest.prototype.hasName = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.StringValue user_interest_parent = 5;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.google.ads.googleads.v1.resources.UserInterest.prototype.getUserInterestParent = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 5));
};


/** @param {?proto.google.protobuf.StringValue|undefined} value */
proto.google.ads.googleads.v1.resources.UserInterest.prototype.setUserInterestParent = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.google.ads.googleads.v1.resources.UserInterest.prototype.clearUserInterestParent = function() {
  this.setUserInterestParent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.ads.googleads.v1.resources.UserInterest.prototype.hasUserInterestParent = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional google.protobuf.BoolValue launched_to_all = 6;
 * @return {?proto.google.protobuf.BoolValue}
 */
proto.google.ads.googleads.v1.resources.UserInterest.prototype.getLaunchedToAll = function() {
  return /** @type{?proto.google.protobuf.BoolValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.BoolValue, 6));
};


/** @param {?proto.google.protobuf.BoolValue|undefined} value */
proto.google.ads.googleads.v1.resources.UserInterest.prototype.setLaunchedToAll = function(value) {
  jspb.Message.setWrapperField(this, 6, value);
};


proto.google.ads.googleads.v1.resources.UserInterest.prototype.clearLaunchedToAll = function() {
  this.setLaunchedToAll(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.ads.googleads.v1.resources.UserInterest.prototype.hasLaunchedToAll = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * repeated google.ads.googleads.v1.common.CriterionCategoryAvailability availabilities = 7;
 * @return {!Array<!proto.google.ads.googleads.v1.common.CriterionCategoryAvailability>}
 */
proto.google.ads.googleads.v1.resources.UserInterest.prototype.getAvailabilitiesList = function() {
  return /** @type{!Array<!proto.google.ads.googleads.v1.common.CriterionCategoryAvailability>} */ (
    jspb.Message.getRepeatedWrapperField(this, google_ads_googleads_v1_common_criterion_category_availability_pb.CriterionCategoryAvailability, 7));
};


/** @param {!Array<!proto.google.ads.googleads.v1.common.CriterionCategoryAvailability>} value */
proto.google.ads.googleads.v1.resources.UserInterest.prototype.setAvailabilitiesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.google.ads.googleads.v1.common.CriterionCategoryAvailability=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.ads.googleads.v1.common.CriterionCategoryAvailability}
 */
proto.google.ads.googleads.v1.resources.UserInterest.prototype.addAvailabilities = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.google.ads.googleads.v1.common.CriterionCategoryAvailability, opt_index);
};


proto.google.ads.googleads.v1.resources.UserInterest.prototype.clearAvailabilitiesList = function() {
  this.setAvailabilitiesList([]);
};


goog.object.extend(exports, proto.google.ads.googleads.v1.resources);
