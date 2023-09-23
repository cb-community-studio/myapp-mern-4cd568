    // See http://mongoosejs.com/docs/models.html
    // for more of what you can do here.
    module.exports = function (app) {
        const modelName = 'sheet12';
        const mongooseClient = app.get('mongooseClient');
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
                   instituition: { type: String, unique: false, lowercase: false, default: '' },
       program: { type: String, unique: false, lowercase: false, default: '' },
       facultyAdminProgramCoordinator: { type: String, unique: false, lowercase: false, default: '' },
       facultyStaffLecturer: { type: String, unique: false, lowercase: false, default: '' },
       staffEmail: { type: String, unique: false, lowercase: false, default: '' },
       otherRoles: { type: String, unique: false, lowercase: false, default: '' },
       lmsPlatform: { type: String, unique: false, lowercase: false, default: '' },

            
          },
          {
            timestamps: true
        });
      
        // This is necessary to avoid model compilation errors in watch mode
        // see https://mongoosejs.com/docs/api/connection.html#connection_Connection-deleteModel
        if (mongooseClient.modelNames().includes(modelName)) {
          mongooseClient.deleteModel(modelName);
        }
        return mongooseClient.model(modelName, schema);
        
      };