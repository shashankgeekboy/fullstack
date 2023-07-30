class Solution(object):
    def strangePrinter(self, s):
        """
        :type s: str
        :rtype: int
        """
        l = len(s)
        dp = [[0 for _ in range(l)] for _ in range(l)]

        for i in range(l):
            dp[i][i] = 1

        for cl in range(2, l + 1):
            for i in range(l - cl + 1):
                j = i + cl - 1
                dp[i][j] = dp[i][j - 1] + 1
                for k in range(i, j):
                    if s[k] == s[j]:
                        dp[i][j] = min(dp[i][j], dp[i][k] + dp[k + 1][j - 1])

        return dp[0][l - 1]