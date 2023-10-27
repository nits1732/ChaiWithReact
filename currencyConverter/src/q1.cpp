// #include <bits/stdc++.h>
// using namespace std;

// // bool f(string s){
// //     bool ans;
// //     int n=s.size();
// //     int c[26]={0};
// //     for(int i=0;i<n;i++){
// //         c[s[i]-'a']++;
// //     }
// //     for(int i=0;i<26;i++){
// //         if(c[i]==0) return false;
// //     }
// //     return true;
// // }
// int main (){
//     int n;
//     cin>>n;
//     // vector<string> v;
//     // for(int i=0;i<n;i++){
//     //     string s;
//     //     cin>>s;
//     //     v.push_back(s);

//     // }
//     // vector<int>ans;
//     // for(int i=0;i<n;i++){
//     //     if(f(v[i])){
//     //         ans.push_back(1);
//     //     }else{
//     //         ans.push_back(0);
//     //     }
//     // }
//     // for(int i=0;i<n;i++)cout<<ans[i]<<" ";
//     return 0;
// }

#include<bits/stdc++.h>
using namespace std;
bool anagram(string & s1, string &s2){
    map<char,int> m1;
    for(auto it:s1){
        m1[it]++;
    }
    for(auto it: s2){
        if(m1.find(it)==m1.end())return false;
    }
    return true;
}
int main(){
    int n,q;
    cin>>n>>q;
    vector<string>s1, s2;
    for(int i=0;i<n;i++){
        string s;
        cin>>s;
        s1.push_back(s);
    }
    for(int i=0;i<q;i++){
        string s;
        cin>>s;
        s2.push_back(s);
    }
    vector<string>ans;
    //find the anagram in the both string 
    for(int i=0;i<n;i++){
        for(int j=0;j<q;j++){
            if(anagram(s1[i],s2[j])){
                ans.push_back(s1[i]);
            }
        }
    }
    for(int i=0;i<ans.size();i++)cout<<ans[i]<<endl;
    return 0;
}