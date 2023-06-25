import { zodResolver } from "@hookform/resolvers/zod"
import { SubmitHandler, useForm } from "react-hook-form"
import { z } from "zod"

import TextField from "@/components/ui/TextField"
import { useBank } from "@/hooks/queries/useBank"
import { useGetPlayer } from "@/hooks/queries/usePlayer"
import validationRules from "@/utils/validation"

const BankAccount = () => {
  const { data: player } = useGetPlayer()
  const { deposit, withdraw } = useBank()

  const accountValidationSchema = z.object({
    playerId: validationRules.playerId,
    amount: z
      .number()
      .min(1)
      .max(player?.character.loan ? 0 : player?.character.doubloons || 0),
  })

  type AccountValidationSchema = z.infer<typeof accountValidationSchema>

  const withdrawalValidationSchema = z.object({
    playerId: validationRules.playerId,
    amount: z
      .number()
      .min(1)
      .max(player?.character.account || 0),
  })

  type WithdrawalValidationSchema = z.infer<typeof withdrawalValidationSchema>

  const {
    register: accountRegister,
    handleSubmit: accountHandleSubmit,
    reset: accountReset,
    formState: { errors: accountErrors, isValid: accountIsValid },
  } = useForm<AccountValidationSchema>({
    resolver: zodResolver(accountValidationSchema),
    mode: "onChange",
  })

  const {
    register: withdrawalRegister,
    handleSubmit: withdrawalHandleSubmit,
    reset: withdrawalReset,
    formState: { errors: withdrawalErrors, isValid: withdrawalIsValid },
  } = useForm<WithdrawalValidationSchema>({
    resolver: zodResolver(withdrawalValidationSchema),
    mode: "onChange",
  })

  const handleDeposit: SubmitHandler<AccountValidationSchema> = (data) => {
    deposit(data)
    accountReset()
  }

  const handleWithdrawal: SubmitHandler<WithdrawalValidationSchema> = (
    data
  ) => {
    withdraw(data)
    withdrawalReset()
  }

  return (
    <div className="w-full flex gap-8">
      <form
        className="w-full mt-4"
        onSubmit={accountHandleSubmit(handleDeposit)}
      >
        <h2 className="text-2xl font-serif font-semibold mt-8 mb-4">
          Make deposit
        </h2>

        <p>
          When doubloons are stored at the bank you will not risk loosing it at
          sea.
        </p>

        {player?.character.loan && (
          <strong className="mt-4 block">
            You cannot deposit any money until your loan has been fully repaid.
          </strong>
        )}

        <TextField
          type="hidden"
          {...accountRegister("playerId", { value: player?.id || "" })}
        />

        <TextField
          label="Amount"
          type="number"
          {...accountRegister("amount", { valueAsNumber: true })}
          error={accountErrors.amount?.message}
        />

        <button
          type="submit"
          className="btn btn-primary mt-4"
          disabled={!accountIsValid}
        >
          Deposit
        </button>
      </form>

      <form
        className="w-full mt-4"
        onSubmit={withdrawalHandleSubmit(handleWithdrawal)}
      >
        <h2 className="text-2xl font-serif font-semibold mt-8 mb-4">
          Make withdrawal
        </h2>

        <p>Take out your doubloons in order to spend it.</p>

        <TextField
          type="hidden"
          {...withdrawalRegister("playerId", { value: player?.id || "" })}
        />

        <TextField
          label="Amount"
          type="number"
          {...withdrawalRegister("amount", { valueAsNumber: true })}
          error={withdrawalErrors.amount?.message}
        />

        <button
          type="submit"
          className="btn btn-primary mt-4"
          disabled={!withdrawalIsValid}
        >
          Withdrawal
        </button>
      </form>
    </div>
  )
}

export default BankAccount