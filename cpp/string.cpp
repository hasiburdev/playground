/* String Methods
 * .size
 * .empty
 * .begin
 * .end
 * .erase (index)
 * 
 */


#include<bits/stdc++.h>
using namespace std;

int main() {
        string s;
        s = "adflk";
        s +=  "bfdsf";
        cout << s.size() << " " << s << endl;
        //Clears data
        s.clear();
        reverse(s.begin(), s.end());
        cout << s << endl;
}
