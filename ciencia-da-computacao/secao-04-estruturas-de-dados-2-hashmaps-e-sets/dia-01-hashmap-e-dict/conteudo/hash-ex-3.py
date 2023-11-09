nums1 = [1, 2, 3, 4, 5, 6]
nums2 = [4, 5, 6, 7, 8, 9]


def intersecao(listA, listB):
    intersecao_list = list()

    for num in listA:
        if num in listB:
            intersecao_list.append(num)

    return intersecao_list


print(intersecao(nums1, nums2))
