import { PrismaClient } from '@prisma/client'
import { Adapter } from 'next-auth/adapters'

export default function PrismaAdapter(prisma: PrismaClient): Adapter {
  return {
    async createUser(user) {
      let prismaUser = await prisma.user.findUnique({
        where: {
          email: user.email,
        },
      })

      if (!prismaUser) {
        prismaUser = await prisma.user.create({
          data: {
            name: user.name,
            email: user.email,
            avatar_url: user.image ?? '',
            auth: user.auth,
          },
        })
      }

      return {
        id: prismaUser.id,
        name: prismaUser.name,
        email: prismaUser.email,
        emailVerified: null,
        auth: prismaUser.auth,
        avatar_url: prismaUser.avatar_url,
      }
    },

    async getUserByEmail(email) {
      const prismaUser = await prisma.user.findUnique({
        where: {
          email,
        },
      })

      const user = prismaUser
        ? {
            id: prismaUser.id,
            name: prismaUser.name,
            email: prismaUser.email,
            emailVerified: null,
            auth: prismaUser.auth,
            avatar_url: prismaUser.avatar_url,
          }
        : null

      return user
    },

    async getUser(id) {
      const prismaUser = await prisma.user.findUnique({
        where: {
          id,
        },
      })

      const user = prismaUser
        ? {
            id: prismaUser.id,
            name: prismaUser.name,
            email: prismaUser.email,
            emailVerified: null,
            auth: prismaUser.auth,
            avatar_url: prismaUser.avatar_url,
          }
        : null

      return user
    },

    async getUserByAccount({ providerAccountId, provider }) {
      const account = await prisma.account.findUnique({
        where: {
          provider_provider_account_id: {
            provider,
            provider_account_id: providerAccountId,
          },
        },
        include: {
          user: true,
        },
      })

      if (!account) {
        return null
      }

      const { user } = account

      return {
        id: user.id,
        name: user.name,
        email: '',
        avatar_url: user.avatar_url!,
        emailVerified: null,
        auth: user.auth,
      }
    },

    async updateUser(user) {
      const userUpdated = await prisma.user.update({
        where: {
          id: user.id,
        },
        data: {
          name: user.name as string,
          avatar_url: user.avatar_url,
        },
      })

      return {
        id: userUpdated.id,
        name: userUpdated.name,
        email: userUpdated.email,
        avatar_url: userUpdated.avatar_url!,
        emailVerified: null,
        auth: userUpdated.auth,
      }
    },

    async linkAccount(account) {
      await prisma.account.create({
        data: {
          user_id: account.userId,
          type: account.type,
          provider: account.provider,
          provider_account_id: account.providerAccountId,
          refresh_token: account.refresh_token,
          access_token: account.access_token,
          expires_at: account.expires_at,
          token_type: account.token_type,
          scope: account.scope,
          id_token: account.id_token,
          session_state: account.session_state,
        },
      })
    },
    async createSession({ sessionToken, userId, expires }) {
      await prisma.session.create({
        data: {
          user_id: userId,
          expires,
          session_token: sessionToken,
        },
      })

      return {
        userId,
        sessionToken,
        expires,
      }
    },

    async getSessionAndUser(sessionToken) {
      const sessionDb = await prisma.session.findUnique({
        where: {
          session_token: sessionToken,
        },
        include: {
          user: true,
        },
      })

      if (!sessionDb) {
        return null
      }

      const { user, ...session } = sessionDb

      return {
        session: {
          id: session.id,
          expires: session.expires,
          userId: session.user_id,
          sessionToken: session.session_token,
        },
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          emailVerified: null,
          avatar_url: user.avatar_url,
          auth: user.auth,
        },
      }
    },

    async updateSession({ sessionToken, expires, userId }) {
      const sessionUpdated = await prisma.session.update({
        where: {
          session_token: sessionToken,
        },
        data: {
          expires,
          user_id: userId,
        },
      })

      return {
        sessionToken,
        userId: sessionUpdated.user_id,
        expires: sessionUpdated.expires,
      }
    },

    async deleteSession(sessionToken) {
      await prisma.session.delete({
        where: {
          session_token: sessionToken,
        },
      })
    },
  }
}
