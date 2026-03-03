module.exports = ({ env }) => ({
  comments: {
    enabled: true,
    config: {
      badWords: true,
      moderatorRoles: ["Authenticated"],
      // تفعيل التعليقات صراحة لهذا الجدول (ضروري جداً في النسخة الخامسة)
      enabledCollections: ["api::article.article"], 
      entryLabel: {
        "*": ["Title", "title", "Name", "name"],
        "api::article.article": ["title"],
      },
      blockedAuthorProps: ["email"],
      gql: {},
    },
  },
});
