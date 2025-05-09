export default async function getUser(userId: string) {
  const response = await fetch(
    `https://cozy-hotel-se-be.vercel.app/api/v1/accounts/${userId}`,
    {
      method: "GET",
    }
  );

  if (!response.ok) {
    throw new Error("Cannot get user");
  }

  return await response.json();
}
