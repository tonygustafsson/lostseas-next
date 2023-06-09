/** Sort items on Server instead of in Firebase because it would require
 * a specific request for ships and crew members otherwise.
 */
export const sortShipsByDate = <T extends Ship>(items?: Record<string, T>) => {
  const itemsArray = Object.values(items || []) as T[]

  if (!itemsArray.length) {
    return
  }

  const result = itemsArray
    .sort((a, b) => a.createdDay - b.createdDay)
    .reduce(
      (acc, curr) => ((acc[curr.id] = curr), acc),
      {} as Record<string, T>
    )

  return result
}
