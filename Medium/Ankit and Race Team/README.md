# Ankit and Race Team

## Problem

Coach Ankit is forming a team for the Annual Inter Galactic Relay Race. He has N students that train under him and he knows their strengths. The strength of a student is represented by a positive integer.

The coach has to form a team of K students. The strength of a team is defined by the strength of the weakest student in the team. Now he wants to know the sum of strengths of all the teams of size K that can be formed modulo 1000000007. Please help him.

**Input**

The first line contains the number of test cases T.<br/>
Each case begins with a line containing integers N and K. The next line contains N space-separated numbers which describe the strengths of the students.

**Output**

For test case output a single integer, the answer as described in the problem statement.

**Constraints:**

1<=T<=100<br/>
1<=N<=100000<br/>
1<=K<=N<br/>
0<=Strength of each student<=2000000000<br/>
Strength of all the students are different.

|Sample Input|Sample Output|
|------------|-------------|
|2|9|
|2 1|1|
|5 4||
|3 2||
|1 0 2||

Time limit: 1<br/>
Memory limit: 256<br/>
Source limit:

## Explanation

For first test case: 5+4=9, as team can only consist of 1 student.
For second test case: min(1,0) + min(1,2) + min(0,2) = 0+1+0 =1

## Contributers:

[
  ![Ankit Srivastava](https://he-s3.s3.amazonaws.com/media/avatars/sentinel45/resized/30/8baa32eprofl_pic.jpg)
  Ankit Srivastava
](https://www.hackerearth.com/@sentinel45)

[
  ![Deepankar Anil](https://he-s3.s3.amazonaws.com/media/avatars/deepankarak/resized/30/61329581329079262844.png)
  Deepankar Anil
](https://www.hackerearth.com/@deepankarak)