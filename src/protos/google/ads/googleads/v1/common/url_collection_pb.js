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

var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
goog.exportSymbol('proto.google.ads.googleads.v1.common.UrlCollection', null, global);

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
proto.google.ads.googleads.v1.common.UrlCollection = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.ads.googleads.v1.common.UrlCollection.repeatedFields_, null);
};
goog.inherits(proto.google.ads.googleads.v1.common.UrlCollection, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.google.ads.googleads.v1.common.UrlCollection.displayName = 'proto.google.ads.googleads.v1.common.UrlCollection';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.ads.googleads.v1.common.UrlCollection.repeatedFields_ = [2,3];



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
proto.google.ads.googleads.v1.common.UrlCollection.prototype.toObject = function(opt_includeInstance) {
  return proto.google.ads.googleads.v1.common.UrlCollection.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.ads.googleads.v1.common.UrlCollection} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v1.common.UrlCollection.toObject = function(includeInstance, msg) {
  var f, obj = {
    urlCollectionId: (f = msg.getUrlCollectionId()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    finalUrlsList: jspb.Message.toObjectList(msg.getFinalUrlsList(),
    google_protobuf_wrappers_pb.StringValue.toObject, includeInstance),
    finalMobileUrlsList: jspb.Message.toObjectList(msg.getFinalMobileUrlsList(),
    google_protobuf_wrappers_pb.StringValue.toObject, includeInstance),
    trackingUrlTemplate: (f = msg.getTrackingUrlTemplate()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f)
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
 * @return {!proto.google.ads.googleads.v1.common.UrlCollection}
 */
proto.google.ads.googleads.v1.common.UrlCollection.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.ads.googleads.v1.common.UrlCollection;
  return proto.google.ads.googleads.v1.common.UrlCollection.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.ads.googleads.v1.common.UrlCollection} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.ads.googleads.v1.common.UrlCollection}
 */
proto.google.ads.googleads.v1.common.UrlCollection.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setUrlCollectionId(value);
      break;
    case 2:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.addFinalUrls(value);
      break;
    case 3:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.addFinalMobileUrls(value);
      break;
    case 4:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setTrackingUrlTemplate(value);
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
proto.google.ads.googleads.v1.common.UrlCollection.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.ads.googleads.v1.common.UrlCollection.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.ads.googleads.v1.common.UrlCollection} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v1.common.UrlCollection.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUrlCollectionId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getFinalUrlsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getFinalMobileUrlsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getTrackingUrlTemplate();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.StringValue url_collection_id = 1;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.google.ads.googleads.v1.common.UrlCollection.prototype.getUrlCollectionId = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 1));
};


/** @param {?proto.google.protobuf.StringValue|undefined} value */
proto.google.ads.googleads.v1.common.UrlCollection.prototype.setUrlCollectionId = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.google.ads.googleads.v1.common.UrlCollection.prototype.clearUrlCollectionId = function() {
  this.setUrlCollectionId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.ads.googleads.v1.common.UrlCollection.prototype.hasUrlCollectionId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated google.protobuf.StringValue final_urls = 2;
 * @return {!Array<!proto.google.protobuf.StringValue>}
 */
proto.google.ads.googleads.v1.common.UrlCollection.prototype.getFinalUrlsList = function() {
  return /** @type{!Array<!proto.google.protobuf.StringValue>} */ (
    jspb.Message.getRepeatedWrapperField(this, google_protobuf_wrappers_pb.StringValue, 2));
};


/** @param {!Array<!proto.google.protobuf.StringValue>} value */
proto.google.ads.googleads.v1.common.UrlCollection.prototype.setFinalUrlsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.google.protobuf.StringValue=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.protobuf.StringValue}
 */
proto.google.ads.googleads.v1.common.UrlCollection.prototype.addFinalUrls = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.google.protobuf.StringValue, opt_index);
};


proto.google.ads.googleads.v1.common.UrlCollection.prototype.clearFinalUrlsList = function() {
  this.setFinalUrlsList([]);
};


/**
 * repeated google.protobuf.StringValue final_mobile_urls = 3;
 * @return {!Array<!proto.google.protobuf.StringValue>}
 */
proto.google.ads.googleads.v1.common.UrlCollection.prototype.getFinalMobileUrlsList = function() {
  return /** @type{!Array<!proto.google.protobuf.StringValue>} */ (
    jspb.Message.getRepeatedWrapperField(this, google_protobuf_wrappers_pb.StringValue, 3));
};


/** @param {!Array<!proto.google.protobuf.StringValue>} value */
proto.google.ads.googleads.v1.common.UrlCollection.prototype.setFinalMobileUrlsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.google.protobuf.StringValue=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.protobuf.StringValue}
 */
proto.google.ads.googleads.v1.common.UrlCollection.prototype.addFinalMobileUrls = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.google.protobuf.StringValue, opt_index);
};


proto.google.ads.googleads.v1.common.UrlCollection.prototype.clearFinalMobileUrlsList = function() {
  this.setFinalMobileUrlsList([]);
};


/**
 * optional google.protobuf.StringValue tracking_url_template = 4;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.google.ads.googleads.v1.common.UrlCollection.prototype.getTrackingUrlTemplate = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 4));
};


/** @param {?proto.google.protobuf.StringValue|undefined} value */
proto.google.ads.googleads.v1.common.UrlCollection.prototype.setTrackingUrlTemplate = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.google.ads.googleads.v1.common.UrlCollection.prototype.clearTrackingUrlTemplate = function() {
  this.setTrackingUrlTemplate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.ads.googleads.v1.common.UrlCollection.prototype.hasTrackingUrlTemplate = function() {
  return jspb.Message.getField(this, 4) != null;
};


goog.object.extend(exports, proto.google.ads.googleads.v1.common);
