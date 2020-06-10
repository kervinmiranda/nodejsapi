module.exports = {
    port: process.env.PORT || 8000,
    db: process.env.MONGODB || 'mongodb://localhost:27017/empleados',
    SECRET_TOKEN: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9'
}