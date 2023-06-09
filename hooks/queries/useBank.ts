import { useMutation, useQueryClient } from "@tanstack/react-query"

import { useSound } from "@/components/Sound/context"
import apiRequest from "@/utils/apiRequest"

import { PLAYER_QUERY_KEY } from "./usePlayer"

export const useBank = () => {
  const queryClient = useQueryClient()
  const { playSoundEffect } = useSound()

  const { mutate: deposit, isLoading: isDepositing } = useMutation(
    (data: { amount: number }) => apiRequest("/api/bank/deposit", data, "POST"),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([PLAYER_QUERY_KEY])
        playSoundEffect("coins")
      },
      onError: (error) => console.error(error),
    }
  )

  const { mutate: withdraw, isLoading: isWithdrawing } = useMutation(
    (data: { amount: number }) =>
      apiRequest("/api/bank/withdraw", data, "POST"),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([PLAYER_QUERY_KEY])
        playSoundEffect("coins")
      },
      onError: (error) => console.error(error),
    }
  )

  const { mutate: loan, isLoading: isLoaning } = useMutation(
    (data: { amount: number }) => apiRequest("/api/bank/loan", data, "POST"),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([PLAYER_QUERY_KEY])
        playSoundEffect("coins")
      },
      onError: (error) => console.error(error),
    }
  )

  const { mutate: repay, isLoading: isRepaying } = useMutation(
    (data: { amount: number }) => apiRequest("/api/bank/repay", data, "POST"),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([PLAYER_QUERY_KEY])
        playSoundEffect("coins")
      },
      onError: (error) => console.error(error),
    }
  )

  return {
    deposit,
    isDepositing,
    withdraw,
    isWithdrawing,
    loan,
    isLoaning,
    repay,
    isRepaying,
  }
}
