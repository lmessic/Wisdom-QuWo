import { Component } from 'react';
import { Layout } from 'antd';

const { Header } = Layout;

// 二叉树结点的构造函数
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

function WordDirectionary() {
  this.words = new Map();
}
// 添加字符串的方法
WordDirectionary.prototype.addWord = function(word) {
  let len = word.length;
  // 若该字符串对应长度的数组已经存在,则只需添加
  if (this.words.has(len)) {
    let value = this.words.get(len);
    console.log(value)
    value.push(word);
    this.words.set(len, value);
  } else {
    this.words.set(len, [word]);
  }
}
// 搜索字符串的方法
WordDirectionary.prototype.searchWord = function(word) {
  let len = word.length;
  if (!this.words.has(len)) return false;
  // 如果字符串不包含. 那么一定是普通字符串
  if (!word.includes('.')) {
    return this.words.get(len).includes(word);
  }
  // 否则是正则表达式
  const reg = new RegExp(word);
  return this.words.get(len).some((item) => reg.test(item));
}
class Product extends Component {
  constructor(props) {
    super(props);
  }
  // 先序遍历
  preorder = (root) => {
    if (!root) {
      return;
    }

    console.log('当前遍历的结点值是：', root.val);

    this.preorder(root.left);
    this.preorder(root.right);
  };
  // 中序遍历
  inorder = (root) => {
    if (!root) {
      return;
    }
    this.inorder(root.left);
    console.log('当前遍历的结点值是：', root.val);
    this.inorder(root.right);
  };

  // 后序遍历
  postorder = (root) => {
    if (!root) {
      return;
    }

    this.postorder(root.left);
    this.postorder(root.right);
    console.log('当前遍历的结点值是：', root.val);
  };

  componentDidMount() {
    const node = new TreeNode(1);
    console.log(node);

    const root = {
      val: 'A',
      left: {
        val: 'B',
        left: {
          val: 'D',
        },
        right: {
          val: 'E',
        },
      },
      right: {
        val: 'C',
        left: {
          val: 'F',
        },
      },
    };
    // this.preorder(root);
    // this.inorder(root);
    // this.postorder(root);
    // this.q1();

    const nums1 = [1, 2, 3, 0, 0, 0];
    const nums2 = [2, 5, 6];
    const m = 3;
    const n = 3;
    // this.mergeArray(nums1, m, nums2, n);
    this.multipleNums();

    // console.log(this.judjeStr('abcaa'));
    const wd = new WordDirectionary();
    wd.addWord('bad');
    wd.addWord('dad');
    wd.addWord('mad');
    // console.log(wd.searchWord('.ad'))
    console.log(this.atio('42'));
    console.log(this.atio('-42'));
    console.log(this.atio('4193 with words'));
    console.log(this.atio('words and 987'));
    console.log(this.atio('-91283472332'));

    // console.log(this.mergeTwoList());
  }

  // 求和
  q1 = () => {
    const nums = [1, 9, 2, 3, 11];
    const target = 12;
    const diffs = new Map();

    for (let i = 0; i < nums.length; i++) {
      if (diffs.has(target - nums[i])) {
        console.log(diffs.get(target - nums[i]), i);
        return;
      }
      diffs.set(nums[i], i);
    }
  };

  // 三数求和
  multipleNums = () => {
    // let nums = [-1, 0, 1, 2, -1, -4];
    let nums = [-5, -5, -4, -4, -4, -2, -2, -2, 0, 0, 0, 1, 1, 3, 4, 4];
    nums = nums.sort((a, b) => a - b);
    const len = nums.length;
    let res = [];

    for (let i = 0; i < len - 2; i++) {
      // 左指针
      let left = i + 1;
      // 右指针
      let right = len - 1;

      // 重复数字，跳过
      if (i > 0 && nums[i] === nums[i - 1]) {
        continue;
      }
      while (left < right) {
        // 三数之和小于0
        if (nums[i] + nums[left] + nums[right] < 0) {
          left++;
          // 处理左指针元素重复的情况
          // while (left < right && nums[left] === nums[left - 1]) {
          //   left++;
          // }
        } else if (nums[i] + nums[left] + nums[right] > 0) {
          right--;
          // 处理右指针重复的情况
          // while (left < right && nums[right] === nums[right - 1]) {
          //   right--;
          // }
        } else {
          res.push([nums[i], nums[left], nums[right]]);
          left++;
          right--;

          while (left < right && nums[left] === nums[left - 1]) {
            left++;
          }

          while (left < right && nums[right] === nums[right - 1]) {
            right--;
          }
        }
      }
    }

    console.log(res);
  };

  // 合并两个有序数组
  /**
   *
   * @param {*} nums1 有序整数数组
   * @param {*} m
   * @param {*} nums2 有序整数数组
   * @param {*} n
   */
  mergeArray = (nums1, m, nums2, n) => {
    let i = m - 1;
    let j = n - 1;
    let k = m + n - 1;

    while (i >= 0 && j >= 0) {
      // 取较大的值，从末尾往前补
      if (nums1[i] >= nums2[j]) {
        nums1[k] = nums1[i];
        i--;
        k--;
      } else {
        nums1[k] = nums2[j];
        j--;
        k--;
      }
    }

    while (j > 0) {
      nums1[k] = nums2[j];
      k--;
      j--;
    }
    console.log(nums1);
  };

  // 判断回文字符串
  isPalindrom = (str) => {
    // const reverseStr = str.split('').reverse().join('');
    // return reverseStr === str;

    const len = str.length;
    for (let i = 0; i < len / 2; i++) {
      // 遍历前半部分,判断和后半部分是否对称
      if (str[i] !== str[len - i - 1]) {
        return false;
      }
    }
    return true;
  };

  judjeStr = (str) => {
    const len = str.length;
    let left = 0;
    let right = len - 1;

    while (left < right && str[left] === str[right]) {
      left++;
      right--;
    }

    if (isPalindrom(left + 1, right)) {
      return true;
    }
    if (isPalindrom(left, right - 1)) {
      return true;
    }
    // 判断字符串是否回文
    function isPalindrom(s, ed) {
      while (s < ed) {
        if (str[s] !== str[ed]) {
          return false;
        }
        s++;
        ed--;
      }
      return true;
    }

    return false;
  };

  // 字符串与数字之间的转换问题
  atio = (str) => {
    const min = -Math.pow(2, 31);
    const max = Math.pow(2, 31) - 1;
    let targetNum = 0;
    
    const reg = /\s*([-\+]?[0-9]*).*/;

    let group = str.match(reg);
    console.log(group);

    if (group) {
      targetNum = +group[1];
      if (isNaN(targetNum)) {
        targetNum = 0;
      }
    }

    if (targetNum > max) return max;
    if (targetNum < min) return min;
    return targetNum;
  }

  // 链表的合并
  mergeTwoList = (l1, l2) => {
    // 定义头节点
    let head = new ListNode();
    console.log(head)
    let cur = head;
    while(l1 && l2) {
      // 如果l1的结点值较小
      if (l1.val <= l2.val) {
        // 先串起l1的结点
        cur.next = l1;
        // l1指针向前移动
        l1 = l1.next;
      } else {
        // l2指针较小
        cur.next = l2;
        l2 = l2.next;
      }
      cur = cur.next;
    }
    // 处理链表长度不相等情况
    cur.next = l1 !== null ? l1 : l2;
    // 返回起始结点
    return head.next;
  }

  // 链表结点的删除
  deleteDuplicates = (head) => {
    // 指针
    let cur = head;

    // 遍历结点
    while(cur !== null && cur.next !== null) {
      // 若当前结点和它后面一个结点的值相等
      if (cur.val === cur.next.val) {
        // 删除后面结点
        cur.next = cur.next.next;
      } else {
        // 若不重复，继续遍历
        cur = cur.next;
      }
    }
    return head;
  }
  // 删除重复过的链表结点
  deleteRepeat = (head) => {
    // 0个或1个结点，不会重复
    if (!head || !head.next) return head;
    
    let dummy = new ListNode();
    // 指向头部结点
    dummy.next = head;
    // 从dummy开始遍历
    let cur = dummy;
    // 当cur后面至少有两个结点时
    while(cur.next && cur.next.next) {
      // 对cur后面的两个结点进行比较
      if (cur.next.val === cur.next.next.val) {
        let val = cur.next.val;
        // 反复排查后面的元素是否存在多次重复该值的情况
        while(cur.next &&cur.next.val === val) {
          // 若有，则删除
          cur.next = cur.next.next;
        }
      } else {
        // 若不重复，正常遍历
        cur = cur.next;
      }
    }
    return dummy.next;
  }

  // 删除链表的倒数第N个结点
  removeNthFromEnd = (head, n) => {
    // 初始化dummy结点
    let dummy = new ListNode();
    // dummy指向头结点
    dummy.next = head;
    // 初始化快慢指针，均指向dummy
    let fast = dummy;
    let slow = dummy;

    // 快指针闷头走n步
    while(n!== 0) {
      fast = fast.next;
      n--
    }

    // 快慢指针一起走
    while(fast.next) {
      slow = slow.next;
      fast = fast.next;
    }
    // 慢指针删除自己的后继结点
    slow.next = slow.next.next;
    // 返回头结点
    return dummy.next;

  }

  // 链表的反转
  reverseList = (head) => {
    // 初始化前驱结点
    let pre = null;
    // 初始化目标结点为头结点
    let cur = head;
    
    // 只要目标结点不为null，继续遍历
    while(cur !== null) {
      // 记录一下next结点
      let next = cur.next;
      // 反转指针
      cur.next = pre;
      // pre往前走一步
      pre = cur.next;
      // cur往前走一步
      cur = next;
    }
    // 反转结束，pre就会变成链表的头结点
    return pre;
  }

  // 局部反转链表m,n
  reverseBetween = (head, m, n) => {
    // 定义pre、cur，用leftHead来承接整个区间的前驱结点
    let pre,cur,leftHead;
    
    const dummy = new ListNode();
    // dummy后继结点是头结点
    dummy.next = head;
    // p是一个游标，用于遍历，最初指向dummy
    let p = dummy;
    // p往前走m - 1步，走到整个区间的前驱结点处
    for (let i = 0; i < m - 1; i++) {
      p = p.next;
    }
    // 记录前驱结点到leftHead
    leftHead = p;
    // start是反转区间的第一个结点
    let start = leftHead.next;
    // pre指向start
    pre = start;
    // cur指向start的下一个结点
    cur = pre.next;

    for (let i = m; i < n; i++) {
      let next = cur.next;

      cur.next = pre;
      pre = cur;
      cur = next;
    }
    // leftHead的后继结点为反转后的第一个结点
    leftHead.next = pre;
    // 反转后的最后一个结点指向cur
    start.next = cur;
    return dummy.next;
  }

  render() {
    return (
      <div>
        <Header>项目</Header>
      </div>
    );
  }
}

export default Product;
