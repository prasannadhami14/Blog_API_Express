const {sequelize}=require('../config/db');
const {DataTypes} =require('sequelize');

// blog category model
const BlogCategory=sequelize.define('BlogCategory',{
    id:{
        type:DataTypes.UUID,
        defaultValue:DataTypes.UUIDV4,
        primaryKey:true,
        allowNull:false,
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true,
    },
});

// blog model
const Blog= sequelize.define('Blog',{
    id:{
        type:DataTypes.UUID,
        defaultValue:DataTypes.UUIDV4,
        primaryKey:true,
        allowNull:false,
    },
    title:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    description:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    categoryId:{
        type:DataTypes.UUID,
        allowNull:false,
        references:{
            model:BlogCategory,
            key:'id',
        }
    }
});
BlogCategory.hasMany(Blog,{foreignKey:'categoryId'});
Blog.belongsTo(BlogCategory,{foreignKey:'categoryId'})
module.exports ={
    BlogCategory,
    Blog,
}