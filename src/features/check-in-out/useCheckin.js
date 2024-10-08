import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";

export function useCheckin() {
  const queryClient = useQueryClient();

  const { mutate: checkin, isLoading: isChechingIn } = useMutation({
    mutationFn: ({ bookingId, breakfast }) =>
      updateBooking(bookingId, {
        status: "checked-in",
        ispaid: true,
        ...breakfast,
      }),

    onSuccess: (data) => {
      toast.success(`Booking #${data.id} successfully checked-in`);
      queryClient.invalidateQueries({ active: true });
    },
    onError: () => toast.error("There was an error while checking in"),
  });

  return { checkin, isChechingIn };
}
