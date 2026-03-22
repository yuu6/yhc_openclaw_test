#!/usr/bin/env node

/**
 * yhc_openclaw_test - 主入口文件
 * 
 * 这是一个由OpenClaw AI助手创建的测试项目
 */

console.log('========================================');
console.log('   yhc_openclaw_test 项目启动');
console.log('========================================\n');

// 项目信息
const projectInfo = {
  name: 'yhc-openclaw-test',
  version: '1.0.0',
  description: 'Test project created by OpenClaw AI assistant',
  author: '于洪潮 (yuu6)',
  created: '2026-03-22',
  purpose: '测试OpenClaw与GitHub的集成功能'
};

// 显示项目信息
console.log('📋 项目信息:');
console.log(`   名称: ${projectInfo.name}`);
console.log(`   版本: ${projectInfo.version}`);
console.log(`   描述: ${projectInfo.description}`);
console.log(`   作者: ${projectInfo.author}`);
console.log(`   创建时间: ${projectInfo.created}`);
console.log(`   目的: ${projectInfo.purpose}\n`);

// 功能演示
console.log('🚀 功能演示:');

// 1. 简单的计算功能
function calculateSum(a, b) {
  return a + b;
}

const num1 = 10;
const num2 = 20;
console.log(`   1. 计算 ${num1} + ${num2} = ${calculateSum(num1, num2)}`);

// 2. 字符串处理
function greetUser(name) {
  return `你好，${name}！欢迎使用OpenClaw测试项目。`;
}

console.log(`   2. ${greetUser('开发者')}`);

// 3. 当前时间
const now = new Date();
console.log(`   3. 当前时间: ${now.toLocaleString('zh-CN')}`);

// 4. 环境信息
console.log(`   4. Node.js版本: ${process.version}`);
console.log(`   5. 运行平台: ${process.platform} ${process.arch}\n`);

// 项目状态
console.log('📊 项目状态:');
console.log('   ✅ 项目结构已创建');
console.log('   ✅ 基础文件已生成');
console.log('   ✅ 准备推送到GitHub');
console.log('   ⏳ 等待GitHub仓库创建...\n');

console.log('========================================');
console.log('   项目初始化完成！');
console.log('   下一步：推送到GitHub仓库');
console.log('========================================');

// 退出程序
process.exit(0);