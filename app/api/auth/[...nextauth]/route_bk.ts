import { FirestoreAdapter } from "@next-auth/firebase-adapter"
import { firestore } from "lib/repository"
import NextAuth from "next-auth"


const handler = NextAuth({
  adapter: FirestoreAdapter(firestore),
  providers:[]
})

export { handler as GET, handler as POST }