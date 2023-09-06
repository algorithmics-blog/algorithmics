export const threeSumTwoPointers = (nums: number[]): number[][] => {
    const result: number[][] = []

    // Предварительно сортируем слайс по возрастанию
    nums.sort()

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i]

        // Не проверяем текущее число, если оно такое же, как и предыдущее, потому для него мы получим такой же результат.
        if (i != 0 && nums[i-1] == num) {
            continue
        }

        let left = i + 1
        let right = nums.length - 1

        while (left < right) {
            const sum = num + nums[left] + nums[right]

            if (sum == 0) {
                result.push([num, nums[left], nums[right]])
                right -= 1
                left += 1

                while (left < right && nums[left] == nums[left-1]) {
                    left += 1
                }
            } else if (sum > 0) {
                right -= 1
            } else {
                left = left + 1
            }
        }
    }

    return result
}
