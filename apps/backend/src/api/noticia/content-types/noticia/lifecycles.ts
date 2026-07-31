export default {
  async afterCreate() {
    await fetch(process.env.NEXT_REVALIDATE_URL!, {
      method: 'POST',
      headers: {
        'x-revalidate-secret': process.env.REVALIDATE_SECRET!,
      },
    });
  },

  async afterUpdate() {
    await fetch(process.env.NEXT_REVALIDATE_URL!, {
      method: 'POST',
      headers: {
        'x-revalidate-secret': process.env.REVALIDATE_SECRET!,
      },
    });
  },
};