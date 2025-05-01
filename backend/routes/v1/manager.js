const express = require("express");
const Routes = express.Router()

const auth = require("./auth/auth");
const schedules = require("./schedules/schedules");
const integration = require("./integration/integration");
const brands = require("./brands/brands");
const users = require("./users/users");

const earlybirds = require("./earlybirds/earlybirds");

Routes.use('/auth', auth)
Routes.use('/schedules', schedules)
Routes.use('/integration', integration)
Routes.use('/brands', brands)
Routes.use('/users', users)
Routes.use('/earlybirds', earlybirds)

module.exports = Routes
