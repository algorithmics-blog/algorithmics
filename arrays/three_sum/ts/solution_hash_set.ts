export const threeSumHashSet = (nums: number[]): number[][] => {
    const result: number[][] = []

    // Предварительно сортируем массив по возрастанию
    nums.sort()

    for (let i = 0; i < nums.length; i++) {
        const firstNum = nums[i]

        // Не проверяем текущее число, если оно такое же, как и предыдущее, потому для него мы получим такой же результат.
        if (i != 0 && nums[i - 1] == firstNum) {
            continue
        }

        const indexMap: Record<number, boolean> = {}

        for (let j = i + 1; j < nums.length; j++) {
            const secondNum = nums[j]

            // Высчитываем третье искомое число
            const thirdNum = 0 - firstNum - secondNum

            if (indexMap[thirdNum]) {
                result.push([firstNum, secondNum, thirdNum])
                while (j + 1 < nums.length && nums[j] == nums[j + 1]) {
                    j++
                }
            }

            indexMap[secondNum] = true
        }
    }

    return result
}