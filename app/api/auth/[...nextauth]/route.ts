import { FirestoreAdapter } from "@auth/firebase-adapter"
import { firestore } from "lib/repository"
import NextAuth from "next-auth"

const handler = NextAuth({
  adapter: FirestoreAdapter(firestore),
})

export { handler as GET, handler as POST }