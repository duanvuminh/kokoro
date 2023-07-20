import * as admin from "firebase-admin";
import { cert } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";

var serviceAccount = require("kyomo-1590f-firebase-adminsdk-kry7c-8bd128f8ed.json");

if (admin.apps.length == 0)
  admin.initializeApp({
    credential: cert(serviceAccount),
    databaseURL:
      "https://kyomo-1590f-default-rtdb.asia-southeast1.firebasedatabase.app",
  });

export const authAdmin = getAuth();
