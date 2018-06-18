module.exports = function(sequelize, DataTypes) {
    var Investments = sequelize.define("Investments", {
        // Giving the Investment model a name type of String
        symbol: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                // insert here
            }
        },
        purchasePrice: {
            type: DataTypes.FLOAT(10, 2), //is this correct?
            allowNull: false,
            validate: {
                // insert here
            }
        },
        purchaseDate: {
            type: DataTypes.DATE, //what is correct input format?
            allowNull: false,
            validate: {
                // insert here
            }
        },
        totalShares: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                // insert here
            }

        }
    });
    
    return Investments;
}

// add validation
  
    // Investments.associate = function(models) {
    //   // We're saying that an Investment should belong to an Investor
    //   // An investment can't be created without an Investor due to the foreign key constraint
    //   Investments.belongsTo(models.Author, {
    //     foreignKey: {
    //       allowNull: false
    //     }
    //   });
    // };

  